import LoginForm from "./partials/loginForm";

const LoginPage = (props) => {
  return (
    <>
      <figure>
        <img
          src="\images\backgrounds\loginBackground.jpg"
          alt="Deciduous trees with a lense flair taken in Arecibo, Puerto Rico"
          className="fixed inset-0 -z-1 bg-cover"
        />
        <figcaption className="photoCredit rounded text-sm text-black bg-gray-400/50 fixed right-1 bottom-1 pl-2 pr-2">
          Orlando Ormon, 2024-05, 200 ISO
        </figcaption>
      </figure>
      <h1 className="place-self-center font-bold text-5xl text-white">
        PaintingsPlus
      </h1>
      <div className="fixed inset-0 flex items-center justify-center bg-gray-500/30">
        <LoginForm redirect={props.redirect} />
      </div>
    </>
  );
};

export default LoginPage;
