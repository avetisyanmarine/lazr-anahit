import { Container, Flexible } from "../../GlobalStyle";
import Church from "../../assets/image/church.avif";
import Bant from "../../assets/image/bant.png";
import PHoto3 from "../../assets/image/photo3.jpg";
import SaveTheDate from "../../assets/image/savethedate.png";
import AttendanceGuests from "../AttendanceGuests";
import { ForthPagePart } from "./styled";

export const ForthPage = () => {
  return (
    <ForthPagePart>
      <Container>
        <div className="relative">
          <img src={PHoto3} alt="Photo 3"className="rounded-[15px]" />
          <img
            className="absolute top-1.5 left-1.5 w-[90px] invert grayscale"
            src={SaveTheDate}
            alt="Save The Date"
          />
        </div>
      </Container>
        <div style={{ margin: "35px 0" }} className="text-center w-full">
        <h2 style={{ marginBottom: "20px" }}>Դետալներ</h2>
        <Flexible className="relative">
          <img src={Bant} className="mx-auto my-8 grayscale" />
          <Flexible
            style={{ padding: "0 25px" }}
            data-aos="fade-up"
            className="absolute w-full h-[322px] bg-white/45 text-2xl"
          >
            Ձեզ հետ բերեք ՍԵՐ, ժպիտներ ու անսահման դրական էմոցիաներ. ինչպես նաև
            հարմարավետ կոշիկներ` պարելու համար:
            <br />
            <br />
            Հարսի պարի և հրավառության ընթացքում կխնդրենք ծնողներին ուշադիր լինել
            իրենց բալիկների նկատմամբ:
          </Flexible>
        </Flexible>
        <h2 style={{ margin: "20px 0", fontFamily: "cursive" }}>
          Dress Code
        </h2>
        <Flexible
          style={{ padding: "0 25px" }}
          data-aos="fade-up"
          className="w-full h-[272px] bg-white/45 text-2xl"
        >
          Խնդրում ենք հարսանիքի օրը <br /> ԽՈՒՍԱՓԵԼ <br /> սպիտակ հագուստ
          կրելուց
          <br />
          <br />
          Մնացած բոլոր երանգները սազում են Ձեզ առավել քան երբևէ
        </Flexible>
      </div>
      <Container>
        <AttendanceGuests />
        <h2
          className="text-center font-[ArmAllegrou]"
          style={{ margin: "20px 0" }}
        >
          Սիրով ՝ <br /> Լազր և Անահիտ
        </h2>
      </Container>
    </ForthPagePart>
  );
};
