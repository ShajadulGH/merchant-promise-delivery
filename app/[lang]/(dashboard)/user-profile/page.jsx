import UserInfo from "./overview/user-info";
import About from "./overview/about";
import ProfileProgress from "./overview//profile-progress";
const Overview = () => {
  return (
    <div className="pt-6 grid grid-cols-12 gap-6">
      <div className="col-span-12 lg:col-span-4 space-y-6">
        <ProfileProgress />
        <UserInfo />
      </div>
      <div className="col-span-12 lg:col-span-8 space-y-6">
        <About />
      </div>
    </div>
  );
};

export default Overview;
