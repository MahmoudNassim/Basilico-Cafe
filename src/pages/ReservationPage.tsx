import HeroSectionComponent from "../components/HeroSectionComponent";
import bg from "../assets/images/Reservstion/bg-reservation.jpg";

const ReservationPage = () => {
  return (
    <div>
      <HeroSectionComponent
        backgroundImage={bg}
        title="book a table"
        subtitle="- Online Reservation -"
        path="Reservation"
      />
    </div>
  );
};

export default ReservationPage;
