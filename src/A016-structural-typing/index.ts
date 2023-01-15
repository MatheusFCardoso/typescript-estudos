type VerifyUserFn = (user: User, sentUser: User) => boolean;
type User = { username: string; password: string };

const verifyUser: VerifyUserFn = (user, sentUser) => {
  return (
    user.password === sentUser.password && user.username === sentUser.username
  );
};

const bdUser = { username: 'matheus', password: '123456' };
const sentUser = { username: 'matheus', password: '123456' };
const loggedIn = verifyUser(sentUser, bdUser);
console.log(loggedIn);
