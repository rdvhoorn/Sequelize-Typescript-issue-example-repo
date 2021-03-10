import {createServer} from 'http';
import {app} from './app';
import {sequelize} from './database/sequelize';
import {User} from "./users/User";

const port = process.env.PORT || 5000;

(async () => {

  await sequelize.sync({force: true});

  await createServer(app)
    .listen(port, () => console.log(`Server listen on port ${port}`));

  User.create({name: true}).then((us: User) => {
    console.log(us.name)
  }).catch((err: Error) => {
    console.log("Could not create user");
  });
})();
