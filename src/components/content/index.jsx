import { Footer } from "../footer";

export function Content() {
  return (
    <div className="pt-16 px-10 sm:pt-56 sm:px-28 text-center sm:text-left text-white ">
      <h1 className="text-2xl sm:text-4xl font-semibold">
        Build The Community <br />
        Your Fans Will Love
      </h1>
      <p className="pt-5">
        Huddle re-imagines the way we build communities. You have a voice, but
        so does your audience. Create connections with your users as you engage
        in genuine discussion.
      </p>
      <button className="mt-10 bg-white text-Violet shadow drop-shadow shadow-black px-20 py-3 rounded-full">
        Register
      </button>
      <Footer />
    </div>
  );
}
