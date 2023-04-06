## Backend / Features

The backend for the project is an [online movie](
  ('https://github.com/Whyssz/cinema-online')
).

- Authorization
- JWT (+refresh token) / password logic
- Storing and adding movies

## Entities

```js
@Module({
  imports: [
    TypegooseModule.forFeature([
      {
        typegooseClass: UserModel,
      },
    ]),
    ConfigModule,
  ],
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule {}
```

Example request:

```js
@UsePipes(new ValidationPipe())
@Put('profile')
@HttpCode(200)
@Auth()
async updateProfile(@User('_id') _id: string, @Body() dto: UpdateUserDto) {
  return this.userService.updateProfile(_id, dto);
}
```

## Contributing

A simple build written for a movie watching [project]('https://github.com/Whyssz/cinema-online').

## Stack

> Node js ▪ Nest js ▪ Express js ▪ Mongoose ▪ TypeScript

## Installing

```shell
git clone https://github.com/Whyssz/cinema-online.git
```
Step next - move to the backend branch  
```shell
git checkout backend
```
And install all dependencies, in repo's root
```shell
yarn
```


`You can use the npm`

## Running

Viewing url: http://localhost:4200

- dev: `yarn dev`

The other commands have default paths:

```json
"dev": "nest start --watch",
"build": "nest build",
"start": "nest start",
```