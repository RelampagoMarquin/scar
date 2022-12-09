import { 
  HttpException, 
  HttpStatus, 
  Injectable 
} from '@nestjs/common';
import { compare } from 'bcrypt';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';

interface FormatLogin extends Partial<UserEntity> {
  registration: string
}

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) { }

  async create(createUserDto: CreateUserDto) {
      const user = await this.prisma.users.create({
        select: {
          id: true,
          name: true,
          registration: true,
          class: true,
          email: true
        },
        data: createUserDto
      });
      return user
  }

  async findAll() {
    return this.prisma.users.findMany({
      select: {
        id: true,
        name: true,
        registration: true,
        class: true,
        email: true
      }
    });
  }

  async findOne(id: number) {
    return this.prisma.users.findUnique({
      select: {
        id: true,
        name: true,
        registration: true,
        class: true,
        email: true
      },
      where: { id }
    })
  }

  async findByResistration(registration: string) {
    return this.prisma.users.findUnique({
      where: { registration }
    })
  }

  async findByEmail(email: string) {
    return this.prisma.users.findUnique({
      where: { email }
    })
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return this.prisma.users.update({
      select: {
        id: true,
        name: true,
        registration: true,
        class: true,
        email: true
      },
      where: { id },
      data: updateUserDto,
    });
  }

  async remove(id: number) {
    return this.prisma.users.delete({
      select: {
        id: true,
        name: true,
        registration: true,
        class: true,
        email: true
      },
      where: { id }
    });
  }

  //use by auth module to login user
  async findByLogin({ registration, password }: LoginUserDto):
    Promise<FormatLogin> {
    const user = await this.prisma.users.findFirst({
      where: { registration }
    });

    if (!user) {
      throw new HttpException("invalid_credentials",
        HttpStatus.UNAUTHORIZED);
    }

    // compare passwords
    const areEqual = await compare(password, user.password);

    if (!areEqual) {
      throw new HttpException("invalid_credentials",
        HttpStatus.UNAUTHORIZED);
    }

    const { password: p, ...rest } = user;
    return rest;
  }

  //use by auth module to get user in database
  async findByPayload({ registration }: any): Promise<any> {
    return await this.prisma.users.findFirst({
      where: { registration }
    });
  }
}
