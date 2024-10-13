import logo from "../assets/logo_HelpShare.png";

export const UserProfile = () => {
  return (
    <main>
      <article className="infoPage">
        <p>HELPSHARE</p>
        <img src={logo} className="logoProfile" />
        <button className="buttonOffer">Ofrecer Ayuda</button>
        <button className="buttonSearch">Buscar Ayuda</button>
      </article>
      <section className="dataUser">
        <div className="NameColor">Antone</div>
        <div className="iconUser"></div>
        <div className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi numquam eius atque consequatur nam, facilis fuga natus beatae maxime ab at alias hic obcaecati nisi voluptatem mollitia tempora. Optio, culpa?</div>
      </section>
    </main>
  );
};