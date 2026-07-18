import HeroContainer from "../hero section/HeroContainer";
import HeroContent from "../hero section/HeroContent";
import HeroGradient from "../hero section/HeroGradient";

export default function Hero() {
  return (
    <div>
      <HeroContent></HeroContent>
      <HeroGradient></HeroGradient>
      <HeroContainer></HeroContainer>
    </div>
  );
}