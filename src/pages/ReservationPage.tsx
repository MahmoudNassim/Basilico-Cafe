import HeroSectionComponent from "../components/HeroSectionComponent";
import bg from "../assets/images/Reservstion/bg-reservation.jpg";
import BookTable from "../components/Reservation/BookTable";

const ReservationPage = () => {
  return (
    <div>
      <HeroSectionComponent
        backgroundImage={bg}
        title="book a table"
        subtitle="- Online Reservation -"
        path="Reservation"
      />
      <BookTable />
    </div>
  );
};

export default ReservationPage;
