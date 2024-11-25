import { TypeAnimation } from "react-type-animation";

export const AnimatedText = () => {
  return (
    <div className="flex flex-col">
      <TypeAnimation
        className="h-12 text-center text-3xl font-bold"
        sequence={[
          "Discover Your Next Adventure. Explore the African Savannahs",
          1000,
          "Discover Your Next Adventure. Explore the African Forests",
          1000,
          "Discover Your Next Adventure. Explore the African Waterfalls",
          1000,
          "Discover Your Next Adventure. Explore the African with NDRA Africa Safari LTD",
          1000,
        ]}
        wrapper="span"
        speed={50}
        style={{
          fontSize: "14px",
          color: "black",
          fontWeight: "bold",
          display: "inline-block",
          height: "3rem",
        }}
        repeat={Infinity}
      />

      {/* The Image Stuff */}

      {/* The Image as a Background */}
      {/* <div
                className="w-full h-[400px] bg-cover bg-center"
                style={{ backgroundImage: 'url("/img/team.png")' }}
              ></div> */}
      <div className="mt-40 flex w-full flex-col items-start justify-start">
        <img src="img/team.png" alt="support" width={500} />
      </div>
    </div>
  );
};
