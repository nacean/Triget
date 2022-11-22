import Link from "next/link";
import titleLogo from "assets/trigetMainLogo.png";
import Image from "next/image";

// navigation 에서 title로 가는 버튼
function Title() {
  return (
    <Link className="titleLink" href="/" passHref>
      <div>
        <Image
          src={titleLogo}
          width={127}
          height={26}
          quality={100}
          style={{ cursor: "pointer" }}
        />
      </div>
    </Link>
  );
}

export default Title;
