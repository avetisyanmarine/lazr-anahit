import {
  ThirdPagePart,
  ThirdPagePartCalendar,
  ThirdPagePartContext,
  ThirdPagePartMini,
} from "./styled";
import { Container } from "../../GlobalStyle";
import SvgChurch from "../../assets/vectors/church.png";
import Church from "../../assets/image/church.avif";
import Restaurant from "../../assets/image/restoran.png";
import SvgRing from "../../assets/vectors/ring.png";
import SvgCouple from "../../assets/vectors/cup.png";
import SerLiqySer from "../../assets/image/serliqyser.png";
import PhotoGroup1 from "../../assets/image/groupphoto1.jpg";
import PhotoGroup2 from "../../assets/image/groupphoto2.jpg";
import PhotoGroup3 from "../../assets/image/groupphoto3.jpg";
import { ForthPagePartContext, ForthPagePart } from "../forth-page/styled";
import { ForthPageBlock } from "../forth-page/fortg-page-block";
import { ThirdPageBlock } from "./third-page-block";

export const ThirdPage = () => {
  return (
    <ThirdPagePart>
      <Container>
        <h2>Ծրագիր</h2>
        <ThirdPagePartContext>
          <ThirdPageBlock
            // uniqueMargin={50}
            className="uniqueone"
            ImageSrc={SvgRing}
            number={"11:00"}
            bigText="ՀԱՐՍԻ ՏՈՒՆ"
            smallText="ք.Սևան , Շահումյան 10ա"
          />
          <ThirdPageBlock
            ImageSrc={SvgChurch}
            number={"15:00"}
            bigText="ՊՍԱԿԱԴՐՈՒԹՅՈՒՆ"
            smallText="Սուրբ Գրիգոր Լուսավորիչ"
          />

          <ThirdPageBlock
            className="secondBlock"
            // uniqueMargin={100}
            line={true}
            ImageSrc={SvgCouple}
            number={"17:30"}
            bigText="ՀԱՐՍԱՆՅԱՑ ՀԱՆԴԻՍՈՒԹՅՈՒՆ"
            smallText="Արև Ռեստորանային Համալիր"
          />
        </ThirdPagePartContext>
        <ForthPagePartContext>
          <ForthPageBlock
            ImageSrc={Church}
            bigText={"Սուրբ Գրիգոր Լուսավորիչ"}
            mapSrc={"https://maps.app.goo.gl/xC2iH7GaFDXZNsh89"}
          />
          <ForthPageBlock
            ImageSrc={Restaurant}
            bigText={"Արև Ռեստորանային Համալիր"}
            mapSrc={"https://maps.app.goo.gl/5HFtTXgcMNXvim3AA"}
          />
        </ForthPagePartContext>
        <div
          className="flex  h-[100vh] gap-[20px] justify-around"
          style={{ marginTop: "70px" }}
        >
            <img src={SerLiqySer} className="h-[100vh] w-[40%]" />
          <div className="flex flex-col gap-2 w-[60%]">
            <img
              src={PhotoGroup1}
              alt=""
              className="h-1/3 object-cover rounded-[10px]"
            />
            <img
              src={PhotoGroup2}
              alt=""
              className="h-1/3 object-cover rounded-[10px]"
            />
            <img
              src={PhotoGroup3}
              alt=""
              className="h-1/3 object-cover rounded-[10px]"
            />
          </div>
        </div>
      </Container>
      <Container>
        <ThirdPagePartMini>
          <h3 className="dzev">Սիրով սպասում ենք</h3>
          <hr />
          <h3 className="dzev">Պահպանիր Օրը</h3>
          <h3>Օգոստոս</h3>
        </ThirdPagePartMini>
        <ThirdPagePartCalendar>
          {[...Array(40)].map((_, i) =>
            i > 4 && i <= 35 ? (
              <div className={i - 4 == 5 ? "special" : ""}>{i - 4}</div>
            ) : (
              <div></div>
            ),
          )}
        </ThirdPagePartCalendar>
      </Container>
    </ThirdPagePart>
  );
};
