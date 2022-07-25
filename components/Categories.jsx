import CategoryItem from "./CategoryItem";

const Categories = () => {
  return (
    <div id="categories" className="p-2 pl-10 md:p-8">
      <h2 className="text-xl font-bold px-2">
        <span className="text-[#9147ff]">Categories</span> we think you'll like
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-10 py-2">
        <CategoryItem
          img="https://static-cdn.jtvnw.net/ttv-boxart/21779-285x380.jpg"
          title="League of Legends"
          viewers="168k viewers"
          tag1="MOBA"
          tag2="Action"
        />

        <CategoryItem
          img="https://static-cdn.jtvnw.net/ttv-boxart/509658-285x380.jpg"
          title="Just Chatting"
          viewers="626k viewers"
          tag1="IRL"
        />
        <CategoryItem
          img="https://static-cdn.jtvnw.net/ttv-boxart/512980-285x380.jpg"
          title="Fall Guys"
          viewers="82.7k viewers"
          tag1="Action"
          tag2="Platformer"
        />
        <CategoryItem
          img="https://static-cdn.jtvnw.net/ttv-boxart/513143-285x380.jpg"
          title="Teamfight tactics"
          viewers="65.5k viewers"
          tag1="Strategy"
        />
        <CategoryItem
          img="https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-285x380.jpg"
          title="Minecraft"
          viewers="82k viewers"
          tag1="Adventure"
        />
        <CategoryItem
          img="https://static-cdn.jtvnw.net/ttv-boxart/32399_IGDB-285x380.jpg"
          title="CS:GO"
          viewers="75.3k viewers"
          tag1="Shooter"
          tag2="FPS"
        />
        <CategoryItem
          img="https://static-cdn.jtvnw.net/ttv-boxart/511224-285x380.jpg"
          title="Apex Legends"
          viewers="57k viewers"
          tag1="Shooter"
          tag2="FPS"
        />
        <CategoryItem
          img="https://static-cdn.jtvnw.net/ttv-boxart/33214-285x380.jpg"
          title="Fortnite"
          viewers="132k viewers"
          tag1="Shooter"
          tag2="Action"
        />
        <CategoryItem
          img="https://static-cdn.jtvnw.net/ttv-boxart/32982_IGDB-285x380.jpg"
          title="Grand Theft Auto V"
          viewers="200k viewers"
          tag1="Adventure"
          tag2="FPS"
        />
        <CategoryItem
          img="https://static-cdn.jtvnw.net/ttv-boxart/513181-285x380.jpg"
          title="Genshin Impact"
          viewers="40k viewers"
          tag1="RPG"
          tag2="Action"
        />
        <CategoryItem
          img="https://static-cdn.jtvnw.net/ttv-boxart/490100-285x380.jpg"
          title="Lost Ark"
          viewers="25.8k viewers"
          tag1="RPG"
          tag2="Action"
        />
        <CategoryItem
          img="https://static-cdn.jtvnw.net/ttv-boxart/509671-285x380.jpg"
          title="Fitness and health"
          viewers="168k viewers"
          tag1="IRL"
        />
        <CategoryItem
          img="https://static-cdn.jtvnw.net/ttv-boxart/1869092879_IGDB-285x380.jpg"
          title="FIFA 22"
          viewers="38.8k viewers"
          tag1="Simulation"
        />
        <CategoryItem
          img="https://static-cdn.jtvnw.net/ttv-boxart/509659-285x380.jpg"
          title="ASMR"
          viewers="11.7k viewers"
          tag1="IRL"
        />
        <CategoryItem
          img="https://static-cdn.jtvnw.net/ttv-boxart/510218_IGDB-285x380.jpg"
          title="Among Us"
          viewers="15k viewers"
          tag1="Strategy"
          tag2="Survival"
        />
        <CategoryItem
          img="https://static-cdn.jtvnw.net/ttv-boxart/18122-285x380.jpg"
          title="World of Warcraft"
          viewers="30.4k viewers"
          tag1="RPG"
          tag2="Adventure"
        />
        <CategoryItem
          img="https://static-cdn.jtvnw.net/ttv-boxart/491487-285x380.jpg"
          title="Dead By Daylight"
          viewers="37.6k viewers"
          tag1="Action"
          tag2="Horror"
        />
        <CategoryItem
          img="https://static-cdn.jtvnw.net/ttv-boxart/26936-285x380.jpg"
          title="Music"
          viewers="32.7 viewers"
          tag1="IRL"
          tag2="Creative"
        />
        <CategoryItem
          img="https://static-cdn.jtvnw.net/ttv-boxart/512953_IGDB-285x380.jpg"
          title="Elden Ring"
          viewers="8.5k viewers"
          tag1="RPG"
          tag2="Action"
        />
        <CategoryItem
          img="https://static-cdn.jtvnw.net/ttv-boxart/27546-285x380.jpg"
          title="World of Tanks"
          viewers="14.4k viewers"
          tag1="Simulation"
          tag2="FPS"
        />
      </div>
    </div>
  );
};

export default Categories;
