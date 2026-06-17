import train from "../../assets/LNER_Train.png";
import kingsCrossLogo from "../../assets/KingsCross.png";
import snail from "../../assets/snail.png";
import cow from "../../assets/Cow.svg";
import turtle from "../../assets/Turtle.svg";

const Emoji = ({ emoji, size = 32 }: { emoji: string; size?: number }) => {
  const code = emoji.codePointAt(0)?.toString(16);

  return (
    <img
      src={`https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/${code}.svg`}
      alt={emoji}
      width={size}
      height={size}
    />
  );
};

export const LongSidewaysFireEmoji = (
  <div
    style={{
      transform: "scaleX(-4) rotate(90deg)",
      width: "150px",
      marginRight: "0px",
    }}
  >
    <Emoji emoji="🔥" size={62} />
  </div>
);
export const ReverseWindEmoji = (
  <div
    style={{
      transform: "scaleX(-1)",
    }}
  >
    <Emoji emoji="💨" size={42} />
  </div>
);

export const SmallReverseTrainEmoji = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "50px",
      }}
    >
      <img
        src={train}
        alt=""
        style={{
          position: "absolute",
          right: "0px",
          height: "50px",
        }}
      />
    </div>
  );
};
export const LargeTrainEmoji = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "50px",
        transform: "scaleX(-1)",
      }}
    >
      <img
        src={train}
        alt=""
        style={{
          position: "absolute",
          right: "0px",
          height: "850px",
        }}
      />
    </div>
  );
};
export const LargeReverseTrainEmoji = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "50px",
      }}
    >
      <img
        src={train}
        alt=""
        style={{
          position: "absolute",
          right: "0px",
          height: "850px",
        }}
      />
    </div>
  );
};
export const ReverseTrainEmoji = (
  <div
    style={{
      width: "300px",
      height: "100px",
      overflow: "hidden",
      position: "relative",
      display: "inline-block",
    }}
  >
    <img
      src={train}
      alt=""
      style={{
        position: "absolute",
        left: "-2200px", // move image inside crop window
        top: 0,
        width: "2500px",
      }}
    />
  </div>
);
export const ReverseFullTrainEmoji = (
  <div
    style={{
      width: "5000px",
      height: "100px",
      overflow: "hidden",
      position: "relative",
      display: "inline-block",
    }}
  >
    <img
      src={train}
      alt=""
      style={{
        position: "absolute",
        left: "-0px", // move image inside crop window
        top: 0,
        width: "3500px",
      }}
    />
  </div>
);
export const GoodReverseTrainEmoji = (
  <div
    style={{
      width: "300px",
      height: "100px",
      overflow: "hidden",
      position: "relative",
      display: "inline-block",
    }}
  >
    <img
      src={train}
      alt=""
      style={{
        position: "absolute",
        left: "-2200px", // move image inside crop window
        top: 0,
        width: "2500px",
      }}
    />
  </div>
);
export const GreatReverseTrainEmoji = (
  <div
    style={{
      width: "300px",
      height: "100px",
      overflow: "hidden",
      position: "relative",
      display: "inline-block",
    }}
  >
    <img
      src={train}
      alt=""
      style={{
        position: "absolute",
        left: "-2215px", // move image inside crop window
        top: 0,
        width: "2500px",
      }}
    />
  </div>
);
export const LowReverseTrainEmoji = (
  <div
    style={{
      width: "500px",
      height: "100px",
      overflow: "hidden",
      position: "relative",
      display: "inline-block",
    }}
  >
    <img
      src={train}
      alt=""
      style={{
        position: "absolute",
        left: "-2015px", // move image inside crop window
        top: 0,
        width: "2500px",
      }}
    />
  </div>
);
export const ZeroReverseTrainEmoji = (
  <div
    style={{
      width: "500px",
      height: "100px",
      overflow: "hidden",
      position: "relative",
      display: "inline-block",
    }}
  >
    <img
      src={train}
      alt=""
      style={{
        position: "absolute",
        left: "-2015px", // move image inside crop window
        top: 0,
        width: "2500px",
      }}
    />
  </div>
);
export const ReverseTrainEmoji2 = (
  <div
    style={{
      width: "500px",
      height: "100px",
      overflow: "hidden",
      position: "relative",
      display: "inline-block",
    }}
  >
    <img
      src={train}
      alt=""
      style={{
        position: "absolute",
        left: "-2000px", // move image inside crop window
        top: 0,
        width: "2500px",
      }}
    />
  </div>
);

export const SidewaysFireEmoji = (
  <div
    style={{
      transform: "scaleX(-4) rotate(90deg)",
      width: "110px",
    }}
  >
    <img
      src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f525.svg"
      alt="fire"
      style={{ width: 42, height: 42 }}
    />
  </div>
);

export const SnailEmoji = (
  <div>
    <img
      src={snail}
      alt=""
      style={{
        position: "absolute",
        left: "0px", // move image inside crop window
        top: "-5px",
        width: "55px",
        transform: "scaleX(-1)",
      }}
    />
  </div>
);

export const TurtleEmoji = (
  <div>
    <img
      src={turtle}
      alt=""
      style={{
        position: "absolute",
        left: "0px", // move image inside crop window
        top: "-20px",
        width: "85px",
      }}
    />
  </div>
);

export const FireEmoji = (
  <div>
    <Emoji emoji="🔥" size={42} />
  </div>
);

export const Tree1Emoji = (
  <div>
    <Emoji emoji="🌳" size={68} />
  </div>
);
export const Tree2Emoji = (
  <div>
    <Emoji emoji="🌲" size={68} />
  </div>
);
export const Tree3Emoji = (
  <div>
    <Emoji emoji="🌴" size={68} />
  </div>
);
export const Tree4Emoji = (
  <div>
    <Emoji emoji="🎄" size={68} />
  </div>
);

export const CowEmoji = (
  <div
    style={{
      transform: "scaleX(-1)",
      // height: "150px",
      width: "60px",
    }}
  >
    <img src={cow} alt="" style={{ height: "50px", marginTop: "0px" }} />
  </div>
);
export const ReverseCowEmoji = (
  <div style={{ width: "60px" }}>
    <img src={cow} alt="" style={{ height: "50px", marginTop: "0px" }} />
  </div>
);
export const KingsCrossLogo = <img src={kingsCrossLogo} alt="" />;
