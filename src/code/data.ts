import { IWish, Wish } from "./state";

import advent1 from "../media/advents/advent1.mp4";
import advent2 from "../media/advents/advent2.jpg";
import advent3 from "../media/advents/advent3.jpg";
import advent4 from "../media/advents/advent4.jpg";
import advent5 from "../media/advents/advent5.mp4";
import advent6 from "../media/advents/advent6.jpg";
import advent7 from "../media/advents/advent7.mp4";
import advent8 from "../media/advents/advent8.jpg";
import advent9 from "../media/advents/advent9.jpg";
import advent10 from "../media/advents/advent10.mp4";
import advent11 from "../media/advents/advent11.jpg";
import advent12 from "../media/advents/advent12.jpg";
import advent13 from "../media/advents/advent13.jpg";
import advent14 from "../media/advents/advent14.jpg";
import advent15 from "../media/advents/advent15.jpg";
import advent16 from "../media/advents/advent16.png";
import advent17 from "../media/advents/advent17.jpg";
import advent18 from "../media/advents/advent18.jpg";
import advent19 from "../media/advents/advent19.mp4";
import advent20 from "../media/advents/advent20.jpg";
import advent21 from "../media/advents/advent21.mp4";
import advent22 from "../media/advents/advent22.mp4";
import advent23 from "../media/advents/advent23.jpg";
import advent24 from "../media/advents/advent24.mp4";
import advent25 from "../media/advents/advent25.jpg";

import { shuffle } from "./utils";

const advents = [advent1, advent2, advent3, advent4, advent5, advent6, advent7, advent8, advent9, advent10, advent11, advent12, advent13, advent14, advent15, advent16, advent17, advent18, advent19, advent20, advent21, advent22, advent23, advent24, advent25];
export function getMedia(id: number) {
	return advents[id];
}

export function getWishes(): { en: IWish[]; bg: IWish[] } {
	const wishValues = [
		{
			titleEN: "The Aurora",
			textEN: "Auroras are the result of disturbances in the magnetosphere caused by solar wind. The following footage captures the event from the board of the International Space Station.",
			titleBG: "Северното сияние",
			textBG: "Северното сияние е резултат на смущения в магнетосферата на Земята, причинени от слънчевия вятър. Показаният клип е заснет от борда на Международната Космическа Станнция",
			mediaType: <"image" | "video">"video",
			source: "https://en.wikipedia.org/wiki/Aurora#/media/File:Aurora_australis_ISS.jpg",
		},
		{
			titleEN: "Aceria anthocoptes",
			textEN: "Aceria anthocoptes are a type of microscopic mites that live on plants. Today we are able to observe them thanks to the invention of Scanning electron micrographs or simply microscopes.",
			titleBG: "Aceria anthocoptes",
			textBG: "Aceria anthocoptes са микроскопични организми живеещи върху растения. Днес сме способни да ги наблюдаваме благодарение на електронните микроскопи. ",
			mediaType: <"image" | "video">"image",
			source: undefined,
		},
		{
			titleEN: "The Helix Nebula",
			textEN: "The Helix Nebula is one of the closest nebulae to Earth. It's as much as 655 light years away from us, yet human technology has made it possible for us to see.",
			titleBG: "Helix Nebula",
			textBG: "Helix Nebula е космически облак от прах и ионизирани газове. Тя се намира на 655 светлинни години от нас и все пак можем да я видим благодарение на човешките изобретения.",
			mediaType: <"image" | "video">"image",
			source: undefined,
		},
		{
			titleEN: "Peafowls!",
			textEN: "Millions of year of еvolution and natural selection have given these birds a set of amazingly beautiful feathers!",
			titleBG: "Пауни!",
			textBG: "Милиони години еволюцияа и естествен отбор са дали на тези птици невероятно красиви пера!",
			mediaType: <"image" | "video">"image",
			source: undefined,
		},
		{
			titleEN: "A good doggo",
			textEN: "Dogs are the human's best friend. They have developed alongside us for the past 10 000 years!",
			titleBG: "Добро момче",
			textBG: "Кучетата са най-добрият приятел на човека. Те са се развивали заедно със нас за последните 10 000 години!",
			mediaType: <"image" | "video">"video",
			source: undefined,
		},
		{
			titleEN: "Fossils",
			textEN: "Perserved through time, fossils give us the unique opportunity to look back through time and see all the amazing life forms that used to walk on Earth.",
			titleBG: "Фосили",
			textBG: "Запазени през времето, фосилите ни дават уникалната възможност да погледнем назад през времето към невероятните форми на живот, които населявали Земята.",
			mediaType: <"image" | "video">"image",
			source: undefined,
		},
		{
			titleEN: "Mandelbrot Set",
			textEN: "The Mandelbrot Set is set of complex numbers. Visualizing the set produces a self-similar pattern that never repeates itself.",
			titleBG: "Множество на Манделброт",
			textBG: "Множеството на Манделброт представлява множество от комплексни числа. Визуализирането на множеството показва себеподобни геометрични форми които никога не се повтарят!",
			mediaType: <"image" | "video">"video",
			source: "https://www.youtube.com/watch?v=qu_oJtxcaaU",
		},
		{
			titleEN: "Dimetrodon",
			textEN: "Even though it's not like looking into a mirror we are distantly related to dimetrodons. They are classified as stem-mammals and have lived somewhat 280 million years ago. ",
			titleBG: "Dimetrodon",
			textBG: "Въпреки че не е точно като да се погледнем в огледалото ние сме дълечно свързани с диметродоните. Те предхождат бозайниците и са живяли преди около 280 милиона години. ",
			mediaType: <"image" | "video">"image",
			source: "https://danniteboul.files.wordpress.com/2014/01/dimetrodon.jpg",
		},
		{
			titleEN: "Puma Punku",
			textEN: "High up in the Andes, the ancient city is believed to be more than 15 000 years old. The details in the ruins are so perfectly cut, that some scientist believe they were made with ancient laser technology!",
			titleBG: "Puma Punku",
			textBG: "Високо в Андите се намират руините на Пума Пунку, датирани от преди 15 000 години. Детаилите в камъка са толкова перфекти, че някои учени ги смятат за направени с помоща на древна лазерна технология.",
			mediaType: <"image" | "video">"image",
			source: "http://www.wakingtimes.com/wp-content/uploads/2015/03/Puma-Punku-doorway-16.jpg",
		},
		{
			titleEN: "Artificial Neural Network Art (ANN)",
			textEN: "ANN Art is achieved, when a image recognition software is reversed. Instead of recognizing dogs and cats, it tries to convert it's input to dogs and cats.",
			titleBG: "Изкуство от Изкуствени Нервни Мрежи",
			textBG: "Произведения от този тип се получават, когато ходът на софтуеър за разпознаване се обърне. Вместо намирането на котки или кучета, програмата превръща входящите данни във котки или кучета.",
			mediaType: <"image" | "video">"video",
			source: "https://deepdreamgenerator.com/#tools",
		},
		{
			titleEN: "Yoga",
			textEN: "An effective exercises for both the mind and the body, yoga has been around for more than 5 000 years. It has passed the test of time and even today is widely spread among people of all origin.",
			titleBG: "Йога",
			textBG: "Eфективно упражнение както за тялото така и за ума, йогата съществува от повече от 5 000 години. Тя е издържала изпитанията на времето и дори днес е широко разпространена сред хора от всякакъв произход.",
			mediaType: <"image" | "video">"image",
			source: "http://i.huffpost.com/gen/3791790/images/o-COUPLE-YOGA-facebook.jpg",
		},
		{
			titleEN: "Milky Way vs. Andromeda",
			textEN: "The two galaxies are destined to collide some 4 million years from now. During the collision the Earth's sky may look a little something like this:",
			titleBG: "Млечният път срещу Андромеда",
			textBG: "Двете галактики ще се сблъскат след има няма 4 милиона години. По време на сблъсъка нощното небе на Земята ще излежда подобно на това:",
			mediaType: <"image" | "video">"image",
			source: "https://www.nasa.gov/mission_pages/hubble/science/milky-way-collide.html",
		},
		{
			titleEN: "Lunar Halo",
			textEN: "Alright, I know you've heared of rainbows, but have you heared of Moonbows? Here's what one of those looks like.",
			titleBG: "Лунен Ореол",
			textBG: "Окей, знам че сте чували за и виждали дъги, но виждали ли сте Лунни Дъги?",
			mediaType: <"image" | "video">"image",
			source: "https://earthsky.org/upl/2017/06/halo-double-Greg-Redfern-e1496692440615.jpg",
		},
		{
			titleEN: "Sousa Mendes",
			textEN: "During the german advance on France in WW2, despite the prohibition of the Portugese government, this portugese counsul issued more than 30 000 passports to jewish people, allowing them to flee to Portugal.",
			titleBG: "Соуза Мендеш",
			textBG: "По време на немското нашествие във Франция, въпреки забраната на правителството му, този португалски посланник издава над 30 000 паспорти на еврейски граждани, което им позволява безопасно бягство към Португалия.",
			mediaType: <"image" | "video">"image",
			source: "https://www.northcountrypublicradio.org/news/npr/486735086/portugal-s-schindler-is-remembered-decades-after-his-life-saving-deeds",
		},
		{
			titleEN: "Breakfast in Antarctica",
			textEN: "It's no secret, that Antarctica gets really, really cold. Here's what happens when you try eating your breakfast outside. ",
			titleBG: "Закуска в Антарктика",
            textBG: "Не е тайна, че Антарктика е много, много студена. Ето това се случва като се опиташ да хапнеш навън.",
			mediaType: <"image" | "video">"image",
			source: "http://rotric.com/2020/02/04/what-its-like-to-have-breakfast-in-antarctica/",
		},
		{
			titleEN: "Cuprosklodowskite",
			textEN: "This is a secondary uranium mineral. Apart from being strongly radioactice, it is truly beautiful to observe.",
			titleBG: "Cuprosklodowskite",
			textBG: "Това е вторичен уранов минерал. Въпреки, че е силно радиоактивен, кристалите на този минерал са невероятно красиви.",
			mediaType: <"image" | "video">"image",
			source: "https://www.gizmodo.com.au/2013/05/10-beautiful-minerals-you-wont-believe-are-found-on-earth/",
		},
		{
			titleEN: "Recycled Art",
			textEN: "Moving forward into the future, recycling our waste is the way to go. To raise awareness to the matter, so called eco artists have created amazing Art Displays.",
			titleBG: "Рециклирано Изкуство",
			textBG: "Рециклирането на отпадъци е правилната посока напред в бъдещето. За да се постави фокус върху проблема, така наречени еко артисти създават страхотни инсталаций.",
			mediaType: <"image" | "video">"image",
			source: "http://www.infobarrel.com/Top_10_Most_Amazing_and_Creative_Recycled_Art_Displays",
		},
		{
			titleEN: "Ant Colony",
			textEN: "Ants are organized and cooperative creatures that build large colonies. The following picture is a cement cast that uncovers the true size of ant headquarters.  ",
			titleBG: "Колонийте на Мравките",
			textBG: "Мравките са организирани и сътрудничащи си същества, който строят огромни колонии. На снимката се вижда циментова отливка, разкриваща истинският мащаб на мравченият щаб.",
			mediaType: <"image" | "video">"image",
			source: "https://www.pinterest.com.au/pin/463730092855833211/",
		},
		{
			titleEN: "Electricity to Light",
			textEN: "Today we take it, as if we always had artificial light by our side, but for all people untill the 19th century, the world was not as bright as it is for us.",
			titleBG: "Светлина от електричество",
			textBG: "Лесно е да не се замисляме за искуствената светлина около нас, но за хората преди 19ти век, светът не е бил толкова светъл колкото за нас.",
			mediaType: <"image" | "video">"video",
			source: undefined,
		},
		{
			titleEN: "Microchips",
			textEN: "Maybe one of the most important inventions of the human. When was the last time you thought about how much this small piece of plastica and conductors shapes our reality today?",
			titleBG: "Микрочипове",
			textBG: "Може би едно от най-важните човешки изобретения. Кога запоследно сте се замисляли колко точно тази малка съвкупност от пластмаса и проводници дефинира реаллността ни днес?",
			mediaType: <"image" | "video">"image",
			source: "https://www.facebook.com/ProgrammersCreateLife/photos/a.241809332534619/3097055123676678/",
		},
		{
			titleEN: "L.U.C.A.",
			textEN: "Life is rich in forms and sizes, but amazingly all life forms today have descended from a cell named LUCA. The last universal common ancestor.",
			titleBG: "L.U.C.A.",
			textBG: "Живорър е богат на форми и размери, но всички тези форми на живот днес са еволюлирали от клетка наречена LUCA(Последен Универсален Общ Предшественик).",
			mediaType: <"image" | "video">"video",
			source: "https://www.youtube.com/watch?v=eI2dG-BId_k",
		},
		{
			titleEN: "3D Printers",
			textEN: "3D Pritnters are an amaizing technology developed in the 21st century. They have gone as far as even printing houses and biological tissue!",
			titleBG: "3Д Принтери",
			textBG: "3Д Принтерите са невероятна технология разработен през 21ви век. С тях могат дори да се принтират къщи и биологични тъкани!",
			mediaType: <"image" | "video">"video",
			source: "https://www.youtube.com/watch?v=hrv0sDACB7M&ab_channel=Trideo",
		},
		{
			titleEN: "Yawns!",
			textEN: "I bet you have never seen a zebra yawn. I addition to being very funny, yawns are hihgliy contagious. Did you yawn?",
			titleBG: "Прозявки!",
			textBG: "Обзалагам се, че не сте виждали зебра да се прозява. Освен, че са доста смешни, прозявките са и много заразни.",
			mediaType: <"image" | "video">"image",
			source: "https://acidcow.com/pics/2982-yawning_animals_23_pics.html",
		},
		{
			titleEN: "Sharing is caring",
			textEN: "Take care for the others and they'll take care for you too.",
			titleBG: "Споделянето е грижа",
			textBG: "Грижете се за другите и те ще се грижат за вас.",
			mediaType: <"image" | "video">"video",
			source: "https://www.youtube.com/watch?v=tKuLorvvtvg",
		},
		{
			titleEN: "Rest",
			textEN: "Whenever we feel stressed and overwhelmed, life becomes difficult. All we have to do is stop, close our eyes and breathe. Peace and quite is sometimes all we need to prevent the chaos from spreading.",
			titleBG: "Почивка",
			textBG: "Когато сме стресирани и под напрежение, живота става труден. Трябва просто да спрем, да затворим очи и да дишаме. Мир и спокойствие понякога са единствените нужни неща да изгоним хаоса.",
			mediaType: <"image" | "video">"image",
			source: undefined,
		},
	];

	const wishesEN = wishValues.map((wish, index) => new Wish(index, wish.textEN, wish.mediaType, wish.titleEN, wish.source));
	const wishesBG = wishValues.map((wish, index) => new Wish(index, wish.textBG, wish.mediaType, wish.titleBG, wish.source));

	const data = {
		en: shuffle(wishesEN),
		bg: shuffle(wishesBG),
	};

	return data;
}
