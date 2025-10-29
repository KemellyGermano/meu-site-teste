export default function TestimonialSection() {
  return (
    <section className="bg-[#FFCA3A] text-black py-16 px-6 sm:px-12  md:px-24 lg:px-32 flex justify-center items-center">
      <div className="max-w-3xl md:max-w-5xl text-left">
        <p className="text-xl sm:text-2xl md:text-4xl font-medium leading-snug sm:leading-snug md:leading-snug mb-8 md:mb-10">
          “O Design System criado pela{" "}
          <span className="font-semibold">Fronthor</span> não só trouxe
          consistência visual, mas também acelerou nosso desenvolvimento e
          reduziu retrabalho. Foi um divisor de águas para nosso time de
          desenvolvimento.”
        </p>
        <div className="mt-6 md:mt-8">
          <p className="font-semibold text-lg sm:text-xl md:text-xl">
            Diego Sevilha
          </p>
          <p className="text-sm sm:text-base md:text-base opacity-80">
            Tech Lead
          </p>
        </div>
      </div>
    </section>
  );
}
