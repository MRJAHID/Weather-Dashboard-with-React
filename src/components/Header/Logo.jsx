import logoImg from "../../assets/logo.svg";

const Logo = () => {
    return (
        <a href="./index.html">
            <img className="h-9" src={logoImg} alt="Weather App"/>
        </a>
    );
};

export default Logo;
