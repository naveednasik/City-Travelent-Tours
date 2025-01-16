import React from 'react';
import PropTypes from 'prop-types';
import { TravelentToursWrapper } from './TravelentTours.styled';
import TourCard from '../TourCard/TourCard';


const tourCities = [
   {
      imgUrl: "/images/lahore_pic.jpg",
      city: "Lahore",
      country: "Pakistan",
      famousDestinations: [
         {
            title: "Lahore Fort",
            images: ["/images/lahore-fort.jpg", "/images/lahore-fort2.jpg"],
            description: "The Lahore Fort is a citadel in the city of Lahore,Punjab. The fortress spreads over an area of more than 20 hectares with twenty one monuments, some of which date to the era of Emperor Akbar. The Lahore Fort was almost entirely rebuilt in the 17th century,at the height of splendour and opulence of the Mughal Empire. The first record of a fortified structure at the present site of Lahore Fort can be traced back to an 11th-century built mud-brick fort. The foundations of the modern Lahore Fort date's back to the reign of Emperor Akba in 1566. As was characteristic of Emperor Akbar, the fort had a syncretic architectural style featuring both Islamic and Hindu motifs. Subsequently,all emperors added to the beauty of the fort with their own inclinations. During Shah Jahan's period, the fort was inlaid with luxurious marble in Persian floral designs, while the iconic Alamgiri Gate was constructed by the last of the great Mughal Emperors, Aurangzeb.The fall of Mughal Empire saw the usage of Lahore Fort as residence of Ranjit Singh, founder of the Sikh Empire."
         },
         {
            title: "Badshahi Mosque",
            images: ["/images/badshahi-mosque.png", "/images/badshahi-mosque1.jpg"],
            description: "The Badshahi Mosque is a Mughal era mosque in Lahore, capital of Punjab, Pakistan. Badshahi Mosque is located in historical setting. Its front side faces Lahore Fort and on the northern side is Minar-e Pakistan, on northeast corner is Samadhi Ranjit Sing, on suthern side is the Walled City of Lahore. The mosque is considered to be one of Lahore's most iconic landmarks.The Badshahi Mosque was commissioned by Mughal Emperor Aurangzeb Alamgir in 1671 AD The construction of the mosque completed in two years until 1673 AD under the supervision of Muzaffer Hussain, also Known as Fidai Khan Koka. The mosque is an important example of Mughal architecture, with an exterior that is decorated with red sandstone with marble inlay. It remains the largest and most recent of the grand imperial mosques of the Mughal-era, and is the second-largest mosque in Pakistan and is now one of the Pakistan's most iconic sights."
         },
         {
            title: "The Shalimar Gardens",
            images: ["/images/shalimar-gardens.jpg", "/images/shalimar-gardens.jpeg"],
            description: "The Shalimar Gardens are located 8 kilometers (5 miles) east of Lahore. They were commissioned by Shah Jahan in 1637. The form of the garden is inspired by the gardens of the same name, in Kashmir, and would later be copied in the Shalimar Gardens of Delhi. The enclosure is over 457 meters (500 yards) long, and contains 2 gardens, with a narrow rectangular terrace in between them. Each garden is divided by canals and flowerbeds, following the Persian tradition of the charbagh, or fourfold garden. Each of the 3 parts is on a different level, so that the upper parts are concealed from the view of people entering from below. The highest, and therefore the most private, section is thought to have been used by the imperial women. The channels of water that weave through the whole garden are fed by canals designed and administered by a defector from the Persian court, Ali Mardan Khan, or Inayat Khan, known for his architectural and building expertise. The gardens contain white marble buildings in typical Shah Jahani style. They are enclosed by a red sandstone wall interrupted by small decorative kiosks. The Shalimar Gardens are among the best preserved Mughal gardens."
         }
      ]

   },
   {
      imgUrl: "/images/islamabad_pic.jpg",
      city: "Islamabad",
      country: "Pakistan",
      famousDestinations: [
         {
            title: "Faisal Mosque",
            images: ["/images/faisal-mosque.png", "/images/faisal-mosque1.png"],
            description: "The mosque is situated at the end of Shaharah-e-Islamabad, against the backdrop of the picturesque Margalla Hills. This placement defines its importance, positioning it on elevated terraced land ensures its visibility during day and night for miles around. The mosque is dedicated to the memory of the late King Faisal of Saudi Arabia who graciously defrayed the cost of the project as a gift to the people of Pakistan.The mosque at its inception was conceptualized as the national mosque of the newly formed Islamic nation and was intended to symbolize the hopes and aspiration of Pakistan.The Turkish architect, Vedat Dalokay's design was selected through an international competition.Dalokay looked to modern as well as medieval Islamic design principals to arrive at a concept that best reflected the people's aspirations. Instead of traditional domes usually associated with mosques, the main prayer hall is an eight faceted concrete shell representative of a desert tent. An impressive engineering feat, the shell reaches a height of 131'- 3 (40m) and is supported on four giant concrete girders. The surface is faced in white marble and decorated inside with mosaics and a spectacular Turkish style chandelier. The hall can accommodate 10,000 worshippers."
         },
         {
            title: "Pakistan Monument",
            images: ["/images/pakistan-monument.png", "/images/pakistan-monument1.png"],
            description: "The Pakistan Monument is a national monument in Islamabad that is shaped like a petal. It is situated in the western Shakarparian Hills and the best place to visit in Islamabad. The magnificent Monument was erected to reflect Pakistanis’ unity and patriotism. It also honors the martyrs who laid down their lives for the sake of our country and its people. The majestic dome-shaped Monument’s architecture represents our history, culture, and heritage. Due to its picturesque location and unique architecture, it is one of Islamabad’s most popular tourist destinations. Moreover, it can be seen from the twin cities of Islamabad and Rawalpindi due to their high elevation. Therefore, it offers an insight into Pakistani’s beautiful history and helps one observe and focus on the city of Islamabad.The magnificent Pakistan Monument was completed in 2006 under the supervision of Engineer Syed Mahmud Khalid. The inauguration ceremony took place on March 23, 2007, and the Pakistan Monument was opened to the public."
         },
         {
            title: "Dame Koh",
            images: ["/images/damne-koh.png", "/images/damne-koh1.png"],
            description: "Indeed, a place surrounded by serenity and stunning views that captivate you all along the way when climbing up the rolling hillside to reach the garden of Damn-e-Koh in the middle of the hillside.The fame of the place is in its panoramic view of the whole city. Its name is derived from the conjunction of two Persian words, Daman and Koh. Daman means foot, and Koh means hill, when combined, gives the meaning of “Foothills.” Damn-e-Koh is on the midway to the hilltop viewpoint, Pir Sohawa. Damn e Koh is at an elevation of about 2400 ft from sea level and around 500 ft from Islamabad. A glimpse of wildlife can also be seen there, as monkeys are commonly frolicking around the gardens. The spot is full of Charismatic sights that are the major tourist attraction in Islamabad."
         }
      ]

   },
   {
      imgUrl: "/images/faislabad.png",
      city: "Faislabad",
      country: "Pakistan",
      famousDestinations: [
         {
            title: "Clock Tower",
            images: ["/images/clock-tower.png", "/images/clock-tower1.png"],
            description: "The Clock Towers one of the oldest monuments still standing in its original state from the period of the British Raj. It was built in the center of the city by filling an old well. The Clock Tower is locally pronounced as “Ghanta Ghar” which means “an hour house” due to the clock installed in it. The erection of this structure was started on 14th November, 1903 by the British lieutenant governor of Punjab, Sir Charles Riwaz and the known local landlord of the Mian family of Abdullahpur. It is located in the center of the city which is the oldest market of Faisalabad with eight bazaars, that were planned on the design of Union Jack (British Flag) approved by Sir James Broadwood Lyall in 1880 (Governor of Punjab at that time). The Clock Tower was opened for the public by Sir Lewis Tupper, Financial Commissioner of the city on December 13, 1905. "
         },
         {
            title: "Lyallpur museum",
            images: ["/images/lyallpur-museum.png", "/images/lyallpur-museum1.png"],
            description: "Lyallpur Museum is a vibrant heritage museum located in Faisalabad, Pakistan. Originally named Lyallpur, the city was renamed Faisalabad in 1977, yet the museum still pays homage to its original name, connecting modern-day Faisalabad with its rich past. The museum is a repository of the region’s history, culture, art, and traditions, housing a wide array of artefacts that span centuries.Lyallpur Museum’s building perfectly blends modern and traditional architectural styles, reflecting the city’s past and present. The museum’s layout is designed to provide a chronological journey through the region’s history. Its well-organized galleries and exhibit spaces offer an immersive experience, drawing visitors into different eras."
         },
         {
            title: "Eight-bazaars",
            images: ["/images/eight-bazaars.png", "/images/eight-bazars1.png"],
            description: "The city of magnificent eight bazaars formerly known as Lyallpur named after Sir James Lyall, the then Lt Governor of Punjab, is the third-largest city of Pakistan after Karachi and Lahore.The distinctive presence of the clock tower and eight bazaars reveals its conscious design synonymous with the Union Jack.The Plateau of Rachna Doaba was barren land having low rainfall and owing to its geographical dynamics, it remained uninhabited since 1,800. Later, it provided an abode for freedom fighters waging a struggle against the British colonial regime. Tough resistance to the occupied regime made the British rule conceive an idea in the late 1,800s to colonise this region with multiple political, economic and administrative objectives and the task was assigned to James Lyall."
         }
      ]

   },
   {
      imgUrl: "/images/karachi_pic.jpg",
      city: "karachi",
      country: "Pakistan",
      famousDestinations: [
         {
            title: "Churna Island",
            images: ["/images/churna-island.png", "/images/churna-island1.png"],
            description: "Charna Island (also spelled Churna Island ) is located near Mubarak Goth, Kiamari Town in Karachi, Sindh, Pakistan. Locally known as ‘Cheerno,’ Churna Island is one of the most secluded and peaceful places for the underwater enthusiasts who wish for a quiet getaway. Churna Island is a small, uninhabited island located in the Arabian Sea, about 9 km (5.6 mi) west of the mouth of the Hub River called “Manjhar Beach”, at the boundary between the provinces of Balochistan and Sindh.. It is the presence of coral reefs around this island that attracts the number of big game fish around it. To top it off, there are secret caves around Churna Island for you to explore. Much like everything on the island, these caves are hidden to the average bystander. But, Churna Island, with its rugged charm and rich blue water, is worth a trip with family and friends. The small but breathtaking island is a perfect getaway from the fast-paced life of Karachi.Churna is mostly used as a firing range by the Pakistan Navy.It is also used by tourists for activities such as scuba diving, freediving, underwater photography, hiking, speed boating, kneeboarding, wakesurfing, banana tubing, jet skiing, cliff diving and snorkeling."
         },
         {
            title: "Mohatta Palace",
            images: ["/images/mohatta -palace.png", "/images/mohatta-palace1.png"],
            description: "For ancient mariners, the delta of the Indus served as an important geographical landmark. Karachi continued as an entrepot for trade along both land and sea routes for several centuries, until the British began to expand their colonial administration under the aegis of the East India Company. Recognising the commercial and strategic importance of Karachi as a means of access to the entire north western flank of the sub-continent and beyond it, to Russia, they annexed Sindh in 1843.In 1927, Shiv Rattan Mohatta, a successful Marwari entrepreneur, commissioned a palatial house in the affluent seaside neighbourhood of Clifton. Mohatta had made his fortune as a ship handler and trader. The architect commissioned for his palace, Ahmed Hussein Agha, was one of the first Muslim architects of India and had come from Jaipur to take up an assignment as chief surveyor for the Karachi Muncipality. Ahmed Hussein Agha designed a number of buildings in Karachi but Mohatta Palace was to prove the coup de maitre of his professional career. Working in a Mughal revival style with a combination of locally available yellow Gizri and pink stone from Jodhpur, he sought to recreate the Anglo Mughal palaces of the Rajput princes."
         },
         {
            title: "Bala Hisar Fort",
            images: ["/images/quaideAzam-house-museum.png", "/images/quaideAzam-house-museum1.png"],
            description: "The fort of Bala-Hissar in the heart of the old city in Peshawar was used as the fortified royal living quarters for the Durrani kings of Afghanistan. The compound word Bala-Hissar derives from Persian, meaing a “fortress raised or high post”. The name was given by the Afghan Pashtun King Timur Shah Durrani who ruled Afghanistan from 1773 to 1793 and had it constructed at the site of an older fortification. Bala-Hissar sits on high ground in the northwest corner of Peshawar city. The primary passage of the fort faces the Grand Trunk (GT) road that joins Peshawar with Afghanistan and Central Asia in the west and stretches out towards Pushkalavati (Charsadda), Hund and Taxila towards the east. It is a heritage site hidden within the city of Peshawar that now serves as the headquarters of the Frontier Corps of Pakistan. Bala-Hissar was revamped during Sikh rule and later under the British Raj. Its fortified quarters cover a territory of around 40,000m2 divided into 10 sections. The fortress stands some 28m above ground level. The fort’s royal quarters were located considerably away from the old city of Peshawar, however the city has spread into the territory and the fort is now situated at the heart of the expanded city, offering a panoramic view of the city and the Peshawar valley beyond. "
         }
      ]

   },
   {
      imgUrl: "/images/peshawar_pic.jpg",
      city: "Peshawar",
      country: "Pakistan",
      famousDestinations: [
         {
            title: "Bab-e-Khyber",
            images: ["/images/bab-e-Khyber.png", "/images/bab-e-khyber1.png"],
            description: "The Bab-e-Khyber, or the Khyber Gate, was built in 1964 at the mouth of the fabled Khyber Pass, where the Jamrud Fort is also located. The pass itself is a witness to history, and has seen countless invaders and great warriors enter the rich lands of subcontinent to seek their fortunes and build empires. The first monument from Peshawar to Khyber Pass is this Khyber Gate ‘Bab-e- Khyber’. Peshawar was already quite a busy town, but the tram in the middle of the main road made the road even narrower and the traffic was horrible. A notable few, like Chandragupta Maurya have also gone the other way, into Afghanistan. The Pass itself is 16 kilometres north of Peshawar, towards the border between Pakistan and Afghanistan. Starting from the foothills of the Suleiman Range at Jamrud, it gradually rises to an elevation of 1,066 metres above sea level.One of the most shocking things we learned was that the fortress was built beside buddhist stupa of Kushan Empire, which amazingly dates back to the 2nd and 5th centuries. This is Sphola Stupa sits on a three- story platform.It housed some Gandhara sculptures, Buddha statues that were excavated in the early 20th century."
         },
         {
            title: "Qissa Khwani Bazaar",
            images: ["/images/qissa-khwani-bazaar.png", "/images/qisa-khawani-bazar1.png"],
            description: "The Qissa Khwani Bazaar is Peshawar’s most well-known and bustling marketplace, and it can be found right in the city’s center.  This marketplace is known as the “Story Tellers’ Bazaar” in English because it was a common practice for merchants and visitors to congregate here in the evening to share tales. Dilip Kumar and Raj Kapoor, two of the most iconic actors in Indian cinema, were both born at Qissa Khwani Bazaar.  While you are taken to the realm of imagination while listening to the captivating tales of adventure and heroism, you wonder at the ingenuity of those storytellers who used to enchant their audience with their abilities as storytellers. At the Qissa Khwani Bazaar, in addition to purchasing books, clothes, cosmetics, sweets, and other items, you can also indulge in several delectable cuisines and traditional forms of “kehwa.” Your trip to the Qissa Khwani Bazaar will be lacking in depth if you do not take the time to listen to the fascinating tales that the locals tell. "
         },
         {
            title: "Qila Bala Hisar Fort",
            images: ["/images/qila-bala-hisar-fort.png", "/images/qila-bala-hisar-fort1.png"],
            description: "The fort of Bala-Hissar in the heart of the old city in Peshawar was used as the fortified royal living quarters for the Durrani kings of Afghanistan. The compound word Bala-Hissar derives from Persian, meaing a “fortress raised or high post”. The name was given by the Afghan Pashtun King Timur Shah Durrani who ruled Afghanistan from 1773 to 1793 and had it constructed at the site of an older fortification. Bala-Hissar sits on high ground in the northwest corner of Peshawar city. The primary passage of the fort faces the Grand Trunk (GT) road that joins Peshawar with Afghanistan and Central Asia in the west and stretches out towards Pushkalavati (Charsadda), Hund and Taxila towards the east. It is a heritage site hidden within the city of Peshawar that now serves as the headquarters of the Frontier Corps of Pakistan. Bala-Hissar was revamped during Sikh rule and later under the British Raj. Its fortified quarters cover a territory of around 40,000m2 divided into 10 sections. The fortress stands some 28m above ground level. The fort’s royal quarters were located considerably away from the old city of Peshawar, however the city has spread into the territory and the fort is now situated at the heart of the expanded city, offering a panoramic view of the city and the Peshawar valley beyond. "
         }
      ]

   },
   {
      imgUrl: "/images/rawalpindi_pic.jpg",
      city: "Rawalpindi",
      country: "Pakistan",
      famousDestinations: [
         {
            title: "Rawat Fort",
            images: ["/images/rawat-fort.png", "/images/rawat-fort1.png"],
            description: "Rawat Fort, a historical treasure located near Rawalpindi, Pakistan, offers a captivating glimpse into the region’s rich cultural and historical heritage. Constructed by the Gakhar tribe in the 15th or 16th century, the fort has witnessed the rise and fall of various empires, including the Mughals, Sikhs, and British (source). Its strategic location on trade routes and its role in regional defenses underscore its historical importance. Today, Rawat Fort stands as a testament to the resilience and architectural prowess of its builders, drawing history enthusiasts and tourists eager to explore its storied past. This comprehensive guide provides detailed information on the fort’s history, architectural features, visiting hours, ticket prices, travel tips, and nearby attractions, making it an essential read for anyone planning to visit this remarkable site. The exact origins of Rawat Fort are shrouded in mystery and debated among historians. While the exact date of construction remains unknown, some scholars attribute its initial construction to the Gakhar tribe during the 15th or 16th century. The Gakhars, a powerful tribe known for their military prowess, held sway over the Potohar region, where Rawat is located, for centuries."
         },
         {
            title: "Ayub National Park",
            images: ["/images/ayub-national-park.png", "/images/ayub-national-park1.png"],
            description: "Ayub National Park, rightly titled ‘Lungs of the Twin Cities,’ is perhaps the most accessible and inclusive public space in the Twin Cities. Before you contest me, take a look at what the park has to offer. It is situated on what used to be the southern entry point for this Garrison city through the Grand Trunk (GT) Road. The road — even though undergoing repair and maintenance at the time of this writing — is wide even if it inevitably leads you to bottlenecks in both directions. There are two access points, one from GT Road and the other through National Park Road that connect Rawalpindi’s ‘old airport’ road (as we like to call it). It is accessible through public transport as well — something that deserves the attention of the concerned. It used to be the old “Bara-dari” which means a 12-doored pavilion. For as long as I remember, it was always a beautiful place with lush green gardens. Until 2019, when the place started undergoing a phenomenal transformation, re-lifting, and re-branding, there used to be yoga classes in the early morning hours for women. Unfortunately, I don’t have pictures from that time. But since its opening for the public (somewhere in 2019 or 20), I have been a regular visitor."
         },
         {
            title: "Liaquat Bagh",
            images: ["/images/liaqat-bagh.png", "/images/liaqat-bagh1.png"],
            description: "Formerly known as Company Bagh, this park has been the unfortunate host to not one but two high profile political assassinations that shook Pakistan. Visitors to Liaquat Bagh, located on one of the main arteries in the garrison city of Rawalpindi, may find themselves unaware that they walk in the footprints of gruesome history. On October 16, 1951, Pakistan's first Prime Minister, Liaquat Ali Khan, was shot dead by an Afghan assailant during a public meeting of his political party here. The park was later renamed Liaquat Bagh (or Liaquat Park) in his memory.  Decades later in 2007, the first female Prime Minister of Pakistan, Benazir Bhutto, was murdered moments after addressing a political rally in the park on December 2007. She died from injuries sustained after the shooting and subsequent blast outside the venue that left 20 others dead. Both cases remain unsolved to this day and have fueled numerous conspiracy theories. In 2016, the park also hosted the funeral of convicted murderer Mumtaz Qadri, who shot governor Punjab Salman Taseer in 2011 over allegations of blasphemy. The funeral drew in thousands of religious fundamentalists who thronged the park to pay their last respects to an assassin."
         }
      ]

   },

];

const TravelentTours = ({ cardClicked }) => (
   <TravelentToursWrapper>
      {tourCities?.map((city) => (
         <TourCard city={city} cardClicked={cardClicked} />
      ))}
   </TravelentToursWrapper>
);

TravelentTours.propTypes = {};

TravelentTours.defaultProps = {};

export default TravelentTours;
