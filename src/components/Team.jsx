import PropTypes from "prop-types";

const Team = ({ teamMates }) => {
  console.log("user :>> ", teamMates);
  return (
    <section className="bg-white shadow">
      <div className="bg-white py-8 ">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <ul
            role="list"
            className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
          >
            {teamMates.map(({ id, name, username, email, phone, company }) => (
              <li key={id}>
                <div className="flex items-center gap-x-6">
                  <img
                    className="h-20 w-20 rounded-full"
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                      {name}
                    </h3>
                    <p className="text-sm font-semibold leading-6 text-indigo-600">
                      {username}
                    </p>
                    <p className="text-sm font-semibold leading-6 text-indigo-600">
                      {email}
                    </p>
                    <p className="text-sm font-semibold leading-6 text-indigo-600">
                      {phone}
                    </p>
                    <p className="text-sm font-semibold leading-6 text-indigo-600">
                      {company.name}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Team;

Team.propTypes = {
  teamMates: PropTypes.array,
};
