/* eslint-disable no-unused-vars */
import Header from "./partials/header";
import { useEffect, useState } from "react";
import GalleryInfo from "./partials/galleryInfo";
import PaintingsTable from "./partials/paintingsTable";

const GalleryView = (props) => {
  const [galleryList, setGalleryList] = useState([]);
  const [selectedGallery, setGallery] = useState([]);
  const [paintingList, setPaintings] = useState([]);
  function displayPaintings(selectedGallery) {
    async function fetchPaintings() {
      // TODO Check local storage for the same api response, store api responses in local storage
      const url =
        "https://comp4513-a1-orlando-ormon.onrender.com/api/paintings/galleries/" +
        selectedGallery.galleryId;
      // console.log("Fetching from:" + url);
      // const response = await fetch(url);
      // setPaintings(await response.json());
      setPaintings([
        [
          {
            paintingId: 406,
            imageFileName: 100010,
            title: "A Man with a Quilted Sleeve",
            shapeId: 1,
            museumLink:
              "https://www.nationalgallery.org.uk/paintings/titian-portrait-of-gerolamo-barbarigo",
            accessionNumber: "NG1944",
            copyrightText: "Creative Commons BY-NC-ND 4.0",
            description:
              "This portrait was eloquently described by Giorgio Vasari in his 1568 biography of Titian. He identified the man as a member of the Barbarigo, an aristocratic Venetian family. The most likely candidate is Gerolamo, who was 30 years old in 1509. He had numerous political and literary contacts and would have helped the young Titian on his path to success.",
            excerpt:
              "This portrait was eloquently described by Giorgio Vasari in his 1568 biography of Titian. He identified the man as a member of the Barbarigo, an aristocratic Venetian family. The most likely candidate is Gerolamo, who was 30 years old in 1509. He had numerous political and literary contacts and would have helped the young Titian on his path to success.",
            yearOfWork: 1509,
            width: 81,
            height: 66,
            medium: "Oil on canvas",
            cost: 500,
            MSRP: 550,
            googleLink:
              "http://www.googleartproject.com/collection/the-national-gallery-london/artwork/portrait-of-gerolamo-barbarigo-titian/330402/",
            googleDescription: "",
            wikiLink:
              "http://en.wikipedia.org/wiki/A_Man_with_a_Quilted_Sleeve",
            jsonAnnotations:
              '{"safeSearchAnnotation":{"violence":1,"racy":1},"dominantColors":[{"color":{"red":76,"green":76,"blue":79},"web":"#4c4c4f","name":"Gun Powder"},{"color":{"red":24,"green":21,"blue":17},"web":"#181511","name":"Bokara Grey"},{"color":{"red":93,"green":76,"blue":38},"web":"#5d4c26","name":"Bronze Olive"},{"color":{"red":168,"green":127,"blue":77},"web":"#a87f4d","name":"Muddy Waters"},{"color":{"red":85,"green":75,"blue":48},"web":"#554B30","name":"Punga"},{"color":{"red":206,"green":197,"blue":164},"web":"#CEC5A4","name":"Double Spanish White"}]}',
            artists: {
              gender: "M",
              details:
                "Tiziano Vecelli known in English as Titian was an Italian painter, the most important member of the 16th-century Venetian school. He was born in Pieve di Cadore, near Belluno (in Veneto), in the Republic of Venice. During his lifetime he was often called da Cadore, taken from the place of his birth. During the course of his long life, Titian's artistic manner changed drastically[4] but he retained a lifelong interest in color. Although his mature works may not contain the vivid, luminous tints of his early pieces, their loose brushwork and subtlety of polychromatic modulations are without precedent in the history of Western art.",
              artistId: 100,
              lastName: "Titian",
              firstName: "",
              artistLink: "http://en.wikipedia.org/wiki/Titian",
              nationality: "Italy",
              yearOfBirth: 1488,
              yearOfDeath: 1576,
            },
            galleries: {
              latitude: 51.5086,
              galleryId: 5,
              longitude: -0.1283,
              yahooWoeId: 20094364,
              galleryCity: "London",
              galleryName: "National Gallery",
              flickrPlaceId: "1EPGyGtTUrrDXJmGCA",
              googlePlaceId: "ChIJeclqF84EdkgRtKAjTmWFr0I",
              galleryAddress: "Trafalgar Square",
              galleryCountry: "UK",
              galleryWebSite: "http://www.nationalgallery.org.uk/",
              galleryNativeName: "National Gallery",
            },
          },
          {
            paintingId: 442,
            imageFileName: 115010,
            title: "Arnolfini Portrait",
            shapeId: 1,
            museumLink:
              "https://www.nationalgallery.org.uk/paintings/jan-van-eyck-the-arnolfini-portrait",
            accessionNumber: "NG186",
            copyrightText: "Creative Commons BY-NC-ND 4.0",
            description:
              "The Arnolfini Portrait is an oil painting on oak panel dated 1434 by the Early Netherlandish painter Jan van Eyck. The painting is a small full-length double portrait, which is believed to represent the Italian merchant Giovanni di Nicolao Arnolfini and possibly his wife, presumably in their home in the Flemish city of Bruges. It is considered one of the more original and complex paintings in Western art because of the iconography, the unusual geometric orthogonal perspective, the use of the mirror to reflect the space, and that the portrait is considered unique by some art historians as the record of a marriage contract in the form of a painting.",
            excerpt:
              "The painting is a small full-length double portrait, which is believed to represent the Italian merchant Giovanni di Nicolao Arnolfini and possibly his wife, presumably in their home in the Flemish city of Bruges.",
            yearOfWork: 1434,
            width: 82,
            height: 62,
            medium: "Oil on oak panel",
            cost: 900,
            MSRP: 1100,
            googleLink: "",
            googleDescription: "",
            wikiLink: "http://en.wikipedia.org/wiki/The_Arnolfini_Portrait",
            jsonAnnotations:
              '{"safeSearchAnnotation":{"violence":1,"racy":1},"dominantColors":[{"color":{"red":39,"green":51,"blue":13},"web":"#27330D","name":"Pine Tree"},{"color":{"red":50,"green":42,"blue":36},"web":"#322A24","name":"Coffee Bean"},{"color":{"red":72,"green":36,"blue":29},"web":"#48241D","name":"Brown Pod"},{"color":{"red":46,"green":62,"blue":9},"web":"#2E3E09","name":"Turtle Green"},{"color":{"red":36,"green":31,"blue":14},"web":"#241F0E","name":"Maire"},{"color":{"red":91,"green":78,"blue":56},"web":"#5B4E38","name":"Metallic Bronze"}]}',
            artists: {
              gender: "M",
              details:
                "Jan van Eyck was a Flemish painter active in Bruges and is generally considered one of the most significant Northern European painters of the 15th century. The few surviving records indicate that he was born around 1390, most likely in Maaseik. Outside of works completed with his brother Hubert van Eyck, only about 23 surviving works are confidently attributed to him, of which ten, including the Ghent altarpiece, are signed and dated.",
              artistId: 115,
              lastName: "van Eyck",
              firstName: "Jan",
              artistLink: "http://en.wikipedia.org/wiki/Jan_van_Eyck",
              nationality: "Belgium",
              yearOfBirth: 1390,
              yearOfDeath: 1441,
            },
            galleries: {
              latitude: 51.5086,
              galleryId: 5,
              longitude: -0.1283,
              yahooWoeId: 20094364,
              galleryCity: "London",
              galleryName: "National Gallery",
              flickrPlaceId: "1EPGyGtTUrrDXJmGCA",
              googlePlaceId: "ChIJeclqF84EdkgRtKAjTmWFr0I",
              galleryAddress: "Trafalgar Square",
              galleryCountry: "UK",
              galleryWebSite: "http://www.nationalgallery.org.uk/",
              galleryNativeName: "National Gallery",
            },
          },
          {
            paintingId: 408,
            imageFileName: 100030,
            title: "Bacchus and Ariadne",
            shapeId: 3,
            museumLink:
              "https://www.nationalgallery.org.uk/paintings/titian-bacchus-and-ariadne",
            accessionNumber: "NG35",
            copyrightText: "Creative Commons BY-NC-ND 4.0",
            description:
              "Bacchus and Ariadne (1520-23) is an oil painting by Titian. It is one of a cycle of paintings on mythological subjects produced for Alfonso d'Este, the Duke of Ferrara, for the Camerino d'Alabastro - a private room in his palazzo in Ferrara decorated with paintings based on classical texts. An advance payment was given to Raphael, who originally held the commission for the subject of a Triumph of Bacchus. At the time of Raphael's death in 1520, only a preliminary drawing was completed and the commission was then handed to Titian. In the case of Bacchus and Ariadne, the subject matter was derived from the Roman poets Catullus and Ovid. The painting, considered one of Titian's greatest works, now hangs in the National Gallery in London.",
            excerpt:
              "Bacchus and Ariadne (1520-23) is an oil painting by Titian. It is one of a cycle of paintings on mythological subjects produced for Alfonso d'Este, the Duke of Ferrara, for the Camerino d'Alabastro - a private room in his palazzo in Ferrara decorated with paintings based on classical texts.",
            yearOfWork: 1520,
            width: 176,
            height: 191,
            medium: "Oil on canvas",
            cost: 1200,
            MSRP: 1400,
            googleLink:
              "http://www.googleartproject.com/collection/the-national-gallery-london/artwork/bacchus-and-ariadne-titian/331385/",
            googleDescription: "",
            wikiLink: "http://en.wikipedia.org/wiki/Bacchus_and_Ariadne",
            jsonAnnotations:
              '{"safeSearchAnnotation":{"violence":1,"racy":2},"dominantColors":[{"color":{"red":92,"green":117,"blue":166},"web":"#5C75A6","name":"San Marino"},{"color":{"red":65,"green":52,"blue":30},"web":"#41341E","name":"Mikado"},{"color":{"red":215,"green":186,"blue":152},"web":"#D7BA98","name":"Pancho"},{"color":{"red":225,"green":175,"blue":134},"web":"#E1AF86","name":"Manhattan"},{"color":{"red":135,"green":154,"blue":173},"web":"#879aad","name":"Bali Hai"},{"color":{"red":129,"green":82,"blue":82},"web":"#815252","name":"Lotus"}]}',
            artists: {
              gender: "M",
              details:
                "Tiziano Vecelli known in English as Titian was an Italian painter, the most important member of the 16th-century Venetian school. He was born in Pieve di Cadore, near Belluno (in Veneto), in the Republic of Venice. During his lifetime he was often called da Cadore, taken from the place of his birth. During the course of his long life, Titian's artistic manner changed drastically[4] but he retained a lifelong interest in color. Although his mature works may not contain the vivid, luminous tints of his early pieces, their loose brushwork and subtlety of polychromatic modulations are without precedent in the history of Western art.",
              artistId: 100,
              lastName: "Titian",
              firstName: "",
              artistLink: "http://en.wikipedia.org/wiki/Titian",
              nationality: "Italy",
              yearOfBirth: 1488,
              yearOfDeath: 1576,
            },
            galleries: {
              latitude: 51.5086,
              galleryId: 5,
              longitude: -0.1283,
              yahooWoeId: 20094364,
              galleryCity: "London",
              galleryName: "National Gallery",
              flickrPlaceId: "1EPGyGtTUrrDXJmGCA",
              googlePlaceId: "ChIJeclqF84EdkgRtKAjTmWFr0I",
              galleryAddress: "Trafalgar Square",
              galleryCountry: "UK",
              galleryWebSite: "http://www.nationalgallery.org.uk/",
              galleryNativeName: "National Gallery",
            },
          },
          {
            paintingId: 370,
            imageFileName: 93010,
            title: "Baptism of Christ",
            shapeId: 1,
            museumLink:
              "https://www.nationalgallery.org.uk/paintings/piero-della-francesca-the-baptism-of-christ",
            accessionNumber: "NG665",
            copyrightText: "Creative Commons BY-NC-ND 4.0",
            description:
              "The Baptism of Christ was commissioned presumably some time about 1440 by the Camaldolese Monastery of Sansepolcro in Tuscany, originally part of a triptych. Its dating to Piero della Francesca's early career is evidenced by the strong relationship with the \"light painting\" of his master, Domenico Veneziano. It portrays Christ being baptised by John, his head surmounted by a dove representing the Holy Spirit. Christ, John's hand, the bird and the bowl form an axis which divides the painting in two symmetrical parts. A second division is created by the tree on the left, which instead divides it according to the golden ratio.",
            excerpt:
              "The Baptism of Christ was commissioned presumably some time about 1440 by the Camaldolese Monastery of Sansepolcro in Tuscany, originally part of a triptych. ",
            yearOfWork: 1450,
            width: 167,
            height: 116,
            medium: "Tempera on panel",
            cost: 900,
            MSRP: 1100,
            googleLink: "",
            googleDescription: "",
            wikiLink:
              "http://en.wikipedia.org/wiki/Baptism_of_Christ_(Piero_della_Francesca)",
            jsonAnnotations:
              '{"safeSearchAnnotation":{"violence":1,"racy":2},"dominantColors":[{"color":{"red":111,"green":133,"blue":152},"web":"#6F8598","name":"Light Slate Grey"},{"color":{"red":59,"green":55,"blue":31},"web":"#3B371F","name":"Graphite"},{"color":{"red":163,"green":152,"blue":125},"web":"#A3987D","name":"Grey Olive"},{"color":{"red":119,"green":79,"blue":33},"web":"#774F21","name":"Antique Brass"},{"color":{"red":92,"green":83,"blue":56},"web":"#5C5338","name":"West Coast"},{"color":{"red":165,"green":154,"blue":128},"web":"a59a80","name":"Nomad"}]}',
            artists: {
              gender: "M",
              details:
                'Piero della Francesca was a painter of the Early Renaissance. As testified by Giorgio Vasari in his Lives of the Artists, to contemporaries he was also known as a mathematician and geometer. Nowadays Piero della Francesca is chiefly appreciated for his art. His painting was characterized by its serene humanism, its use of geometric forms and perspective. His most famous work is the cycle of frescoes \\"The Legend of the True Cross\\" in the church of San Francesco in the Tuscan town of Arezzo.',
              artistId: 93,
              lastName: "Francesca",
              firstName: "Piero della",
              artistLink: "http://en.wikipedia.org/wiki/Piero_della_Francesca",
              nationality: "Italy",
              yearOfBirth: 1412,
              yearOfDeath: 1492,
            },
            galleries: {
              latitude: 51.5086,
              galleryId: 5,
              longitude: -0.1283,
              yahooWoeId: 20094364,
              galleryCity: "London",
              galleryName: "National Gallery",
              flickrPlaceId: "1EPGyGtTUrrDXJmGCA",
              googlePlaceId: "ChIJeclqF84EdkgRtKAjTmWFr0I",
              galleryAddress: "Trafalgar Square",
              galleryCountry: "UK",
              galleryWebSite: "http://www.nationalgallery.org.uk/",
              galleryNativeName: "National Gallery",
            },
          },
          {
            paintingId: 294,
            imageFileName: 20010,
            title: "Bathing At Asnieres",
            shapeId: 2,
            museumLink:
              "https://www.nationalgallery.org.uk/paintings/georges-seurat-bathers-at-asnieres",
            accessionNumber: "NG3908",
            copyrightText: "Creative Commons BY-NC-ND 4.0",
            description:
              "Bathers at Asnieres is an oil-on-canvas painting by the French artist Georges-Pierre Seurat, the first of his two masterpieces on the monumental scale. Seurat borrowed from sources such as those of the fresco painters of the 15th century, the French classicism of Nicolas Poussin, and of contemporary Impressionism to create a unified canvas of a suburban, but placid Parisian riverside scene. The isolated figures and their clothes piled sculpturally on the riverbank, together with the trees, and austere boundary walls and buildings, are presented in a formal layout. A combination of complex brushstroke techniques, and a meticulous application of contemporary colour theory bring to the composition a sense of gentle vibrancy and timelessness.",
            excerpt:
              "Bathers at Asnieres is an oil-on-canvas painting by the French artist Georges-Pierre Seurat, the first of his two masterpieces on the monumental scale. ",
            yearOfWork: 1883,
            width: 201,
            height: 300,
            medium: "Oil on canvas",
            cost: 825,
            MSRP: 900,
            googleLink: "",
            googleDescription: "",
            wikiLink: "http://en.wikipedia.org/wiki/Bathers_at_Asni%C3%A8res",
            jsonAnnotations:
              '{"safeSearchAnnotation":{"violence":1,"racy":1},"dominantColors":[{"color":{"red":159,"green":161,"blue":162},"web":"#9FA1A2","name":"Grey Chateau"},{"color":{"red":62,"green":50,"blue":52},"web":"#3E3234","name":"Cab Sav"},{"color":{"red":156,"green":165,"blue":132},"web":"#9ca584","name":"Sage"},{"color":{"red":231,"green":221,"blue":203},"web":"#e7ddcb","name":"Half Spanish White"},{"color":{"red":89,"green":99,"blue":115},"web":"#596373","name":"Shuttle Grey"},{"color":{"red":151,"green":108,"blue":95},"web":"#976c5f","name":"Dark Chestnut"}]}',
            artists: {
              gender: "M",
              details:
                "Georges-Pierre Seurat was a French Post-Impressionist painter and draftsman. He is noted for his innovative use of drawing media and for devising a technique of painting known as pointillism. His large-scale work A Sunday Afternoon on the Island of La Grande Jatte (1884-1886), Seurat's most famous painting, altered the direction of modern art by initiating Neo-impressionism, and is one of the icons of 19th century painting.",
              artistId: 20,
              lastName: "Seurat",
              firstName: "Georges",
              artistLink: "http://en.wikipedia.org/wiki/Seurat",
              nationality: "France",
              yearOfBirth: 1859,
              yearOfDeath: 1891,
            },
            galleries: {
              latitude: 51.5086,
              galleryId: 5,
              longitude: -0.1283,
              yahooWoeId: 20094364,
              galleryCity: "London",
              galleryName: "National Gallery",
              flickrPlaceId: "1EPGyGtTUrrDXJmGCA",
              googlePlaceId: "ChIJeclqF84EdkgRtKAjTmWFr0I",
              galleryAddress: "Trafalgar Square",
              galleryCountry: "UK",
              galleryWebSite: "http://www.nationalgallery.org.uk/",
              galleryNativeName: "National Gallery",
            },
          },
          {
            paintingId: 537,
            imageFileName: 117030,
            title: "Christ Crowned with Thorns",
            shapeId: 1,
            museumLink:
              "https://www.nationalgallery.org.uk/paintings/hieronymus-bosch-christ-mocked-the-crowning-with-thorns",
            accessionNumber: "NG474",
            copyrightText:
              "Private, personal, academic, research or educational",
            description:
              "Four torturers surround Christ, pressing towards him, while he looks out at us. Bosch's picture emphasises the contrast between the brutality of the tormentors and the mild, suffering Christ. Its emotional intensity is achieved in a variety of ways. The half-length figures create a sense of proximity, and the lack of recession in the painting makes it appear very claustrophobic. From the centre of the picture Christ seems to appeal to us to share in his suffering.",
            excerpt:
              "Bosch's picture emphasises the contrast between the brutality of the tormentors and the mild, suffering Christ.",
            yearOfWork: 1495,
            width: 59,
            height: 74,
            medium: "Oil on canvas",
            cost: 700,
            MSRP: 900,
            googleLink:
              "https://artsandculture.google.com/asset/christ-mocked-the-crowning-with-thorns/tgEYBOMT1BeBzw",
            googleDescription: "",
            wikiLink:
              "https://en.wikipedia.org/wiki/Christ_Crowned_with_Thorns_(Bosch,_London)",
            jsonAnnotations:
              '{"safeSearchAnnotation":{"violence":3,"racy":1},"dominantColors":[{"color":{"red":56,"green":49,"blue":22},"web":"#383116","name":"Mikado"},{"color":{"red":168,"green":156,"blue":127},"web":"#A89C7F","name":"Napa"},{"color":{"red":28,"green":26,"blue":22},"web":"#1C1A16","name":"Maire"},{"color":{"red":79,"green":85,"blue":26},"web":"#4F551A","name":"Army Green"},{"color":{"red":201,"green":150,"blue":132},"web":"#c99684","name":"Quicksand"},{"color":{"red":163,"green":54,"blue":60},"web":"#a3363c","name":"Guardsman Red"}]}',
            artists: {
              gender: "M",
              details:
                "Hieronymus Bosch was an Early Netherlandish painter. His work is known for its use of fantastic imagery to illustrate moral and religious concepts and narratives.",
              artistId: 117,
              lastName: "Bosch",
              firstName: "Hieronymus",
              artistLink: "http://en.wikipedia.org/wiki/Hieronymus_Bosch",
              nationality: "Netherlands",
              yearOfBirth: 1450,
              yearOfDeath: 1516,
            },
            galleries: {
              latitude: 51.5086,
              galleryId: 5,
              longitude: -0.1283,
              yahooWoeId: 20094364,
              galleryCity: "London",
              galleryName: "National Gallery",
              flickrPlaceId: "1EPGyGtTUrrDXJmGCA",
              googlePlaceId: "ChIJeclqF84EdkgRtKAjTmWFr0I",
              galleryAddress: "Trafalgar Square",
              galleryCountry: "UK",
              galleryWebSite: "http://www.nationalgallery.org.uk/",
              galleryNativeName: "National Gallery",
            },
          },
          {
            paintingId: 433,
            imageFileName: 110010,
            title: "Mr and Mrs Andrews",
            shapeId: 4,
            museumLink:
              "https://www.nationalgallery.org.uk/paintings/thomas-gainsborough-mr-and-mrs-andrews",
            accessionNumber: "NG6301",
            copyrightText: "Creative Commons BY-NC-ND 4.0",
            description:
              "Mr and Mrs Andrews is an oil on canvas portrait by Thomas Gainsborough in the National Gallery, London. Today it is one of his most famous works. Thomas Gainsborough was twenty-one when he painted Mr and Mrs Andrews in 1750.",
            excerpt:
              "Mr and Mrs Andrews is an oil on canvas portrait by Thomas Gainsborough in the National Gallery, London. Today it is one of his most famous works. Thomas Gainsborough was twenty-one when he painted Mr and Mrs Andrews in 1750.",
            yearOfWork: 1750,
            width: 69,
            height: 119,
            medium: "Oil on Canvas",
            cost: 900,
            MSRP: 1100,
            googleLink: "",
            googleDescription: "",
            wikiLink: "http://en.wikipedia.org/wiki/Mr_and_Mrs_Andrews",
            jsonAnnotations:
              '{"safeSearchAnnotation":{"violence":1,"racy":1},"dominantColors":[{"color":{"red":131,"green":124,"blue":62},"web":"#837C3E","name":"Highball"},{"color":{"red":145,"green":165,"blue":148},"web":"#91A594","name":"Envy"},{"color":{"red":121,"green":121,"blue":95},"web":"#79795F","name":"Kokoda"},{"color":{"red":156,"green":159,"blue":129},"web":"#9C9F81","name":"Locust"},{"color":{"red":115,"green":120,"blue":106},"web":"#73786A","name":"Gunsmoke"},{"color":{"red":94,"green":91,"blue":63},"web":"#5E5B3F","name":"Verdigris"}]}',
            artists: {
              gender: "M",
              details:
                "Thomas Gainsborough was an English portrait and landscape painter. He is credited as the originator of the 18th century British landscape school.",
              artistId: 110,
              lastName: "Gainsborough",
              firstName: "Thomas",
              artistLink: "http://en.wikipedia.org/wiki/Thomas_Gainsborough",
              nationality: "England",
              yearOfBirth: 1737,
              yearOfDeath: 1788,
            },
            galleries: {
              latitude: 51.5086,
              galleryId: 5,
              longitude: -0.1283,
              yahooWoeId: 20094364,
              galleryCity: "London",
              galleryName: "National Gallery",
              flickrPlaceId: "1EPGyGtTUrrDXJmGCA",
              googlePlaceId: "ChIJeclqF84EdkgRtKAjTmWFr0I",
              galleryAddress: "Trafalgar Square",
              galleryCountry: "UK",
              galleryWebSite: "http://www.nationalgallery.org.uk/",
              galleryNativeName: "National Gallery",
            },
          },
          {
            paintingId: 288,
            imageFileName: 12050,
            title: "Music in the Tuileries Gardens",
            shapeId: 2,
            museumLink:
              "https://www.nationalgallery.org.uk/paintings/edouard-manet-music-in-the-tuileries-gardens",
            accessionNumber: "NG3260",
            copyrightText: "Creative Commons BY-NC-ND 4.0",
            description:
              "It is an early example of Manet's painterly style, inspired by Frans Hals and Diego Vel�zquez, and it is a harbinger of his life-long interest in the subject of leisure.",
            excerpt:
              "It is an early example of Manet's painterly style, inspired by Frans Hals and Diego Vel�zquez, and it is a harbinger of his life-long interest in the subject of leisure.",
            yearOfWork: 1862,
            width: 76,
            height: 118,
            medium: "Oil on canvas",
            cost: 300,
            MSRP: 350,
            googleLink: "",
            googleDescription: "",
            wikiLink: "http://en.wikipedia.org/wiki/Music_in_the_Tuileries",
            jsonAnnotations:
              '{"safeSearchAnnotation":{"violence":1,"racy":1},"dominantColors":[{"color":{"red":37,"green":43,"blue":24},"web":"#252b18","name":"Rangoon Green"},{"color":{"red":246,"green":224,"blue":156},"web":"#F6E09C","name":"Buttermilk"},{"color":{"red":220,"green":196,"blue":134},"web":"#DCC486","name":"Zombie"},{"color":{"red":202,"green":194,"blue":164},"web":"#CAC2A4","name":"Double Spanish White"},{"color":{"red":163,"green":154,"blue":124},"web":"#A39A7C","name":"Grey Olive"},{"color":{"red":69,"green":80,"blue":103},"web":"#455067","name":"East Bay"}]}',
            artists: {
              gender: "M",
              details:
                "Edouard Manet was a French painter. One of the first 19th-century artists to approach modern-life subjects, he was a pivotal figure in the transition from Realism to Impressionism.",
              artistId: 12,
              lastName: "Manet",
              firstName: "Edouard",
              artistLink: "http://en.wikipedia.org/wiki/Manet",
              nationality: "France",
              yearOfBirth: 1832,
              yearOfDeath: 1883,
            },
            galleries: {
              latitude: 51.5086,
              galleryId: 5,
              longitude: -0.1283,
              yahooWoeId: 20094364,
              galleryCity: "London",
              galleryName: "National Gallery",
              flickrPlaceId: "1EPGyGtTUrrDXJmGCA",
              googlePlaceId: "ChIJeclqF84EdkgRtKAjTmWFr0I",
              galleryAddress: "Trafalgar Square",
              galleryCountry: "UK",
              galleryWebSite: "http://www.nationalgallery.org.uk/",
              galleryNativeName: "National Gallery",
            },
          },
          {
            paintingId: 435,
            imageFileName: 110030,
            title: "Portrait of Mrs. Sarah Siddons",
            shapeId: 1,
            museumLink:
              "https://www.nationalgallery.org.uk/paintings/thomas-gainsborough-mrs-siddons",
            accessionNumber: "NG683",
            copyrightText: "Creative Commons BY-NC-ND 4.0",
            description:
              "Sarah Siddons was the outstanding tragic actress of her time. Reynolds and other artists also painted her portrait. Gainsborough is reported to have had difficulties with the nose.",
            excerpt:
              "Sarah Siddons was the outstanding tragic actress of her time. Reynolds and other artists also painted her portrait. Gainsborough is reported to have had difficulties with the nose.",
            yearOfWork: 1785,
            width: 126,
            height: 100,
            medium: "Oil on Canvas",
            cost: 700,
            MSRP: 800,
            googleLink: "",
            googleDescription: "",
            wikiLink:
              "http://en.wikipedia.org/wiki/File:Thomas_Gainsborough_015.jpg",
            jsonAnnotations:
              '{"safeSearchAnnotation":{"violence":1,"racy":1},"dominantColors":[{"color":{"red":83,"green":44,"blue":28},"web":"#532C1C","name":"Indian Tan"},{"color":{"red":40,"green":22,"blue":23},"web":"#281617","name":"Rustic Red"},{"color":{"red":114,"green":107,"blue":88},"web":"#726b58","name":"Peat"},{"color":{"red":85,"green":96,"blue":108},"web":"#55606c","name":"Shuttle Grey"},{"color":{"red":207,"green":192,"blue":157},"web":"#cfc09d","name":"Double Spanish White"},{"color":{"red":228,"green":196,"blue":142},"web":"#e4c48e","name":"New Orleans"}]}',
            artists: {
              gender: "M",
              details:
                "Thomas Gainsborough was an English portrait and landscape painter. He is credited as the originator of the 18th century British landscape school.",
              artistId: 110,
              lastName: "Gainsborough",
              firstName: "Thomas",
              artistLink: "http://en.wikipedia.org/wiki/Thomas_Gainsborough",
              nationality: "England",
              yearOfBirth: 1737,
              yearOfDeath: 1788,
            },
            galleries: {
              latitude: 51.5086,
              galleryId: 5,
              longitude: -0.1283,
              yahooWoeId: 20094364,
              galleryCity: "London",
              galleryName: "National Gallery",
              flickrPlaceId: "1EPGyGtTUrrDXJmGCA",
              googlePlaceId: "ChIJeclqF84EdkgRtKAjTmWFr0I",
              galleryAddress: "Trafalgar Square",
              galleryCountry: "UK",
              galleryWebSite: "http://www.nationalgallery.org.uk/",
              galleryNativeName: "National Gallery",
            },
          },
          {
            paintingId: 419,
            imageFileName: 104030,
            title: "Rokeby Venus",
            shapeId: 2,
            museumLink:
              "https://www.nationalgallery.org.uk/paintings/diego-velazquez-the-toilet-of-venus-the-rokeby-venus",
            accessionNumber: "NG2057",
            copyrightText: "Creative Commons BY-NC-ND 4.0",
            description:
              "The Rokeby Venus is a painting by Diego Velazquez (1599-1660), the leading artist of the Spanish Golden Age. Completed between 1647 and 1651, and probably painted during the artist's visit to Italy, the work depicts the goddess Venus in a sensual pose, lying on a bed and looking into a mirror held by the Roman god of physical love, her son Cupid. Numerous works, from the ancient to the baroque, have been cited as sources of inspiration for Velazquez. The nude Venuses of the Italian painters, such as Giorgione's Sleeping Venus (c. 1510) and Titian's Venus of Urbino (1538), were the main precedents. In this work, Velazquez combined two established poses for Venus: recumbent on a couch or a bed, and gazing at a mirror. She is often described as looking at herself on the mirror, although this is physically impossible since viewers can see her face reflected in their direction. This phenomenon is known as the Venus effect. In a number of ways the painting represents a pictorial departure, through its central use of a mirror, and because it shows the body of Venus turned away from the observer of the painting.",
            excerpt:
              "Completed between 1647 and 1651, and probably painted during the artist's visit to Italy, the work depicts the goddess Venus in a sensual pose, lying on a bed and looking into a mirror held by the Roman god of physical love, her son Cupid. Numerous works, from the ancient to the baroque, have been cited as sources of inspiration for Velazquez.",
            yearOfWork: 1647,
            width: 122,
            height: 177,
            medium: "Oil on canvas",
            cost: 600,
            MSRP: 700,
            googleLink: "",
            googleDescription: "",
            wikiLink: "http://en.wikipedia.org/wiki/Rokeby_Venus",
            jsonAnnotations:
              '{"safeSearchAnnotation":{"violence":1,"racy":5},"dominantColors":[{"color":{"red":167,"green":156,"blue":150},"web":"#A79C96","name":"Del Rio"},{"color":{"red":59,"green":62,"blue":73},"web":"#3b3e49","name":"Blue Zodiac"},{"color":{"red":75,"green":35,"blue":43},"web":"#4B232B","name":"Bordeaux"},{"color":{"red":135,"green":60,"blue":73},"web":"#873c49","name":"Camelot"},{"color":{"red":48,"green":48,"blue":48},"web":"#303030","name":"Night Rider"},{"color":{"red":178,"green":147,"blue":147},"web":"#B29393","name":"Rosy Brown"}]}',
            artists: {
              gender: "M",
              details:
                "Diego Rodriguez de Silva y Velazquez was a Spanish painter who was the leading artist in the court of King Philip IV. He was an individualistic artist of the contemporary Baroque period, important as a portrait artist. In addition to numerous renditions of scenes of historical and cultural significance, he painted scores of portraits of the Spanish royal family, other notable European figures, and commoners.",
              artistId: 104,
              lastName: "Vel�zquez",
              firstName: "Diego",
              artistLink: "http://en.wikipedia.org/wiki/Diego_Vel%C3%A1zquez",
              nationality: "Spain",
              yearOfBirth: 1599,
              yearOfDeath: 1660,
            },
            galleries: {
              latitude: 51.5086,
              galleryId: 5,
              longitude: -0.1283,
              yahooWoeId: 20094364,
              galleryCity: "London",
              galleryName: "National Gallery",
              flickrPlaceId: "1EPGyGtTUrrDXJmGCA",
              googlePlaceId: "ChIJeclqF84EdkgRtKAjTmWFr0I",
              galleryAddress: "Trafalgar Square",
              galleryCountry: "UK",
              galleryWebSite: "http://www.nationalgallery.org.uk/",
              galleryNativeName: "National Gallery",
            },
          },
          {
            paintingId: 437,
            imageFileName: 113010,
            title: "Self-portrait in a Straw Hat",
            shapeId: 1,
            museumLink:
              "https://www.nationalgallery.org.uk/paintings/elisabeth-louise-vigee-le-brun-self-portrait-in-a-straw-hat",
            accessionNumber: "NG1653",
            copyrightText: "Creative Commons BY-NC-ND 4.0",
            description:
              "The painting appears, after cleaning, to be an autograph replica of a picture, the original of which was painted in Brussels in 1782 in free imitation of Rubens's 'Chapeau de Paille', which Vigee Le Brun had seen in Antwerp. It was exhibited in Paris in 1782 at the Salon de la Correspondance. Vigee Le Brun's original is recorded in a private collection in France.",
            excerpt:
              "The painting appears, after cleaning, to be an autograph replica of a picture, the original of which was painted in Brussels in 1782 in free imitation of Rubens's 'Chapeau de Paille', which Vigee Le Brun had seen in Antwerp. It was exhibited in Paris in 1782 at the Salon de la Correspondance. Vigee Le Brun's original is recorded in a private collection in France.",
            yearOfWork: 1782,
            width: 98,
            height: 71,
            medium: "Oil on Canvas",
            cost: 700,
            MSRP: 800,
            googleLink: "",
            googleDescription: "",
            wikiLink:
              "http://en.wikipedia.org/wiki/File:Self-portrait_in_a_Straw_Hat_by_Elisabeth-Louise_Vig%C3%A9e-Lebrun.jpg",
            jsonAnnotations:
              '{"safeSearchAnnotation":{"violence":1,"racy":2},"dominantColors":[{"color":{"red":115,"green":140,"blue":145},"web":"#738c91","name":"Gothic"},{"color":{"red":30,"green":24,"blue":25},"web":"#1e1819","name":"Rustic Red"},{"color":{"red":85,"green":88,"blue":85},"web":"#555855","name":"Nandor"},{"color":{"red":60,"green":41,"blue":30},"web":"#3c291e","name":"Bistre"},{"color":{"red":120,"green":97,"blue":67},"web":"#786143","name":"Yellow Metal"},{"color":{"red":202,"green":188,"blue":163},"web":"#cabca3","name":"Soft Amber"}]}',
            artists: {
              gender: "F",
              details:
                "Elisabeth Louise Vigee Le Brun also known as Madame Lebrun, was a French painter, and is recognized as the most important female painter of the 18th century. Her style is generally considered Rococo and shows interest in the subject of neoclassical painting. Vigee Le Brun cannot be considered a pure Neoclassist, however, in that she creates mostly portraits in Neoclassical dress.",
              artistId: 113,
              lastName: "Lebrun",
              firstName: "Elisabeth Louise",
              artistLink: "http://en.wikipedia.org/wiki/Elisabeth_Vigee-Lebrun",
              nationality: "France",
              yearOfBirth: 1755,
              yearOfDeath: 1842,
            },
            galleries: {
              latitude: 51.5086,
              galleryId: 5,
              longitude: -0.1283,
              yahooWoeId: 20094364,
              galleryCity: "London",
              galleryName: "National Gallery",
              flickrPlaceId: "1EPGyGtTUrrDXJmGCA",
              googlePlaceId: "ChIJeclqF84EdkgRtKAjTmWFr0I",
              galleryAddress: "Trafalgar Square",
              galleryCountry: "UK",
              galleryWebSite: "http://www.nationalgallery.org.uk/",
              galleryNativeName: "National Gallery",
            },
          },
          {
            paintingId: 412,
            imageFileName: 101030,
            title: "Supper at Emmaus",
            shapeId: 2,
            museumLink:
              "https://www.nationalgallery.org.uk/paintings/michelangelo-merisi-da-caravaggio-the-supper-at-emmaus",
            accessionNumber: "NG172",
            copyrightText: "Creative Commons BY-NC-ND 4.0",
            description:
              "The Supper at Emmaus is a painting by the Italian Baroque master Caravaggio, and now in the National Gallery in London. The painting depicts the moment when the resurrected but incognito Jesus, reveals himself to two of his disciples (presumed to be Luke and Cleopas), only to soon vanish from their sight. Cleopas wears the scallopshell of a pilgrim. The other apostle wears torn clothes. Cleopas gesticulates in a perspectively-challenging extension of arms in and out of the frame of reference. The standing groom, forehead smooth and face in darkness, appears oblivious to the event. The painting is unusual for the life-sized figures, the dark and blank background. The table lays out a still-life meal. The basket of food teeters perilously over the edge.",
            excerpt:
              "The painting depicts the moment when the resurrected but incognito Jesus, reveals himself to two of his disciples (presumed to be Luke and Cleopas), only to soon vanish from their sight.",
            yearOfWork: 1601,
            width: 141,
            height: 196,
            medium: "Oil on canvas",
            cost: 1300,
            MSRP: 1500,
            googleLink: "",
            googleDescription: "",
            wikiLink:
              "http://en.wikipedia.org/wiki/Supper_at_Emmaus_(London)_(Caravaggio)",
            jsonAnnotations:
              '{"safeSearchAnnotation":{"violence":1,"racy":1},"dominantColors":[{"color":{"red":126,"green":115,"blue":84},"web":"#7E7354","name":"Pablo"},{"color":{"red":66,"green":51,"blue":29},"web":"#42331D","name":"Clinker"},{"color":{"red":42,"green":29,"blue":12},"web":"#2A1D0C","name":"Cocoa Brown"},{"color":{"red":79,"green":43,"blue":28},"web":"#4F2B1C","name":"Indian Tan"},{"color":{"red":125,"green":116,"blue":69},"web":"#7D7445","name":"Go Ben"},{"color":{"red":154,"green":144,"blue":118},"web":"#9A9076","name":"Pale Oyster"}]}',
            artists: {
              gender: "M",
              details:
                "Michelangelo Merisi da Caravaggio was an Italian artist active in Rome, Naples, Malta, and Sicily between 1593 and 1610. His paintings, which combine a realistic observation of the human state, both physical and emotional, with a dramatic use of lighting, had a formative influence on the Baroque school of painting.",
              artistId: 101,
              lastName: "Caravaggio",
              firstName: "",
              artistLink: "http://en.wikipedia.org/wiki/Caravaggio",
              nationality: "Italy",
              yearOfBirth: 1571,
              yearOfDeath: 1610,
            },
            galleries: {
              latitude: 51.5086,
              galleryId: 5,
              longitude: -0.1283,
              yahooWoeId: 20094364,
              galleryCity: "London",
              galleryName: "National Gallery",
              flickrPlaceId: "1EPGyGtTUrrDXJmGCA",
              googlePlaceId: "ChIJeclqF84EdkgRtKAjTmWFr0I",
              galleryAddress: "Trafalgar Square",
              galleryCountry: "UK",
              galleryWebSite: "http://www.nationalgallery.org.uk/",
              galleryNativeName: "National Gallery",
            },
          },
          {
            paintingId: 413,
            imageFileName: 102010,
            title: "The Judgement of Paris",
            shapeId: 2,
            museumLink:
              "https://www.nationalgallery.org.uk/paintings/peter-paul-rubens-the-judgement-of-paris",
            accessionNumber: "NG194",
            copyrightText: "Creative Commons BY-NC-ND 4.0",
            description:
              "The Judgement of Paris produced by Peter Paul Rubens is one of two very similar paintings. Both show Rubens' version of idealised feminine beauty, with the goddesses Venus, Minerva and Juno on one side and Paris accompanied by Mercury on the other.",
            excerpt:
              "The Judgement of Paris produced by Peter Paul Rubens is one of two very similar paintings. Both show Rubens' version of idealised feminine beauty, with the goddesses Venus, Minerva and Juno on one side and Paris accompanied by Mercury on the other.",
            yearOfWork: 1636,
            width: 144,
            height: 193,
            medium: "Oil on canvas",
            cost: 900,
            MSRP: 1100,
            googleLink:
              "http://www.googleartproject.com/collection/the-national-gallery-london/artwork/the-judgement-of-paris-peter-paul-rubens/331377/details/",
            googleDescription: "",
            wikiLink:
              "http://en.wikipedia.org/wiki/The_Judgment_of_Paris_(Rubens)",
            jsonAnnotations:
              '{"safeSearchAnnotation":{"violence":1,"racy":4},"dominantColors":[{"color":{"red":189,"green":150,"blue":132},"web":"#BD9684","name":"Pale Taupe"},{"color":{"red":215,"green":187,"blue":168},"web":"#D7BBA8","name":"Just Right"},{"color":{"red":41,"green":11,"blue":13},"web":"#290B0D","name":"Rustic Red"},{"color":{"red":149,"green":109,"blue":90},"web":"#956D5A","name":"Beaver"},{"color":{"red":132,"green":112,"blue":89},"web":"#847059","name":"Cement"},{"color":{"red":140,"green":53,"blue":28},"web":"#8c351c","name":"Burnt Umber"}]}',
            artists: {
              gender: "M",
              details:
                "Sir Peter Paul Rubens was a German-born Flemish Baroque painter, and a proponent of an extravagant Baroque style that emphasised movement, colour, and sensuality. He is well known for his Counter-Reformation altarpieces, portraits, landscapes, and history paintings of mythological and allegorical subjects.",
              artistId: 102,
              lastName: "Rubens",
              firstName: "Peter Paul",
              artistLink: "http://en.wikipedia.org/wiki/Peter_Paul_Rubens",
              nationality: "Belgium",
              yearOfBirth: 1577,
              yearOfDeath: 1640,
            },
            galleries: {
              latitude: 51.5086,
              galleryId: 5,
              longitude: -0.1283,
              yahooWoeId: 20094364,
              galleryCity: "London",
              galleryName: "National Gallery",
              flickrPlaceId: "1EPGyGtTUrrDXJmGCA",
              googlePlaceId: "ChIJeclqF84EdkgRtKAjTmWFr0I",
              galleryAddress: "Trafalgar Square",
              galleryCountry: "UK",
              galleryWebSite: "http://www.nationalgallery.org.uk/",
              galleryNativeName: "National Gallery",
            },
          },
          {
            paintingId: 378,
            imageFileName: 95030,
            title: "Venus and Mars",
            shapeId: 4,
            museumLink:
              "https://www.nationalgallery.org.uk/paintings/sandro-botticelli-venus-and-mars",
            accessionNumber: "NG915",
            copyrightText: "Creative Commons BY-NC-ND 4.0",
            description:
              "Venus and Mars is a c. 1483 painting by the Italian Renaissance master Sandro Botticelli. It shows the Roman gods Venus and Mars in an allegory of Beauty and Valour. Venus watches Mars sleep while two infant satyrs play carrying his armour as another rests under his arm. A fourth blows a small conch shell in his ear in an effort to wake him. The scene is set in a forest, and the background shows, in the distance, the sea from which Venus emerged. A swarm of wasps hover around Mars' head, possibly as a symbol that love is often accompanied by pain. Another possible explanation is that the wasps represent the Vespucci family that may have commissioned the painting; the symbol of the Vespucci house is the wasp. The painting is thought originally to have been the back of a lettuccio, a wooden sofa.",
            excerpt:
              "Venus and Mars is a c. 1483 painting by the Italian Renaissance master Sandro Botticelli. It shows the Roman gods Venus and Mars in an allegory of Beauty and Valour",
            yearOfWork: 1483,
            width: 69,
            height: 173,
            medium: "Tempera on panel",
            cost: 900,
            MSRP: 1000,
            googleLink: "",
            googleDescription: "",
            wikiLink:
              "http://en.wikipedia.org/wiki/Venus_and_Mars_(Botticelli)",
            jsonAnnotations:
              '{"safeSearchAnnotation":{"violence":1,"racy":4},"dominantColors":[{"color":{"red":63,"green":49,"blue":28},"web":"#3F311C","name":"Mikado"},{"color":{"red":205,"green":192,"blue":195},"web":"#CDC0C3","name":"Melanie"},{"color":{"red":182,"green":157,"blue":144},"web":"#b69d90","name":"Del Rio"},{"color":{"red":192,"green":117,"blue":139},"web":"#c0758b","name":"Tapestry"},{"color":{"red":99,"green":117,"blue":57},"web":"#637539","name":"Chalet Green"},{"color":{"red":131,"green":99,"blue":46},"web":"#83632e","name":"Hot Curry"}]}',
            artists: {
              gender: "M",
              details:
                "Alessandro di Mariano di Vanni Filipepi, better known as Sandro Botticelli was an Italian painter of the Early Renaissance. He belonged to the Florentine school under the patronage of Lorenzo de' Medici, a movement that Giorgio Vasari would characterize less than a hundred years later as a \\\"golden age\\\", a thought, suitably enough, he expressed at the head of his Vita of Botticelli. Botticelli's posthumous reputation suffered until the late 19th century; since then his work has been seen to represent the linear grace of Early Renaissance painting. Among his best known works are The Birth of Venus and Primavera.",
              artistId: 95,
              lastName: "Botticelli",
              firstName: "Sandro",
              artistLink: "http://en.wikipedia.org/wiki/Sandro_Botticelli",
              nationality: "Italy",
              yearOfBirth: 1445,
              yearOfDeath: 1510,
            },
            galleries: {
              latitude: 51.5086,
              galleryId: 5,
              longitude: -0.1283,
              yahooWoeId: 20094364,
              galleryCity: "London",
              galleryName: "National Gallery",
              flickrPlaceId: "1EPGyGtTUrrDXJmGCA",
              googlePlaceId: "ChIJeclqF84EdkgRtKAjTmWFr0I",
              galleryAddress: "Trafalgar Square",
              galleryCountry: "UK",
              galleryWebSite: "http://www.nationalgallery.org.uk/",
              galleryNativeName: "National Gallery",
            },
          },
          {
            paintingId: 451,
            imageFileName: 120020,
            title: "Venus, Cupid, Folly and Time",
            shapeId: 1,
            museumLink:
              "https://www.nationalgallery.org.uk/paintings/bronzino-an-allegory-with-venus-and-cupid",
            accessionNumber: "NG651",
            copyrightText: "Creative Commons BY-NC-ND 4.0",
            description:
              "Venus, Cupid, Folly, and Time is an allegorical painting by the Florentine artist Agnolo Bronzino. It is now in the National Gallery, London.",
            excerpt:
              "Venus, Cupid, Folly, and Time is an allegorical painting by the Florentine artist Agnolo Bronzino. It is now in the National Gallery, London.",
            yearOfWork: 1545,
            width: 146,
            height: 116,
            medium: "Oil on Wood",
            cost: 800,
            MSRP: 900,
            googleLink: "",
            googleDescription: "",
            wikiLink:
              "http://en.wikipedia.org/wiki/Venus,_Cupid,_Folly,_and_Time",
            jsonAnnotations:
              '{"safeSearchAnnotation":{"violence":1,"racy":5},"dominantColors":[{"color":{"red":215,"green":191,"blue":163},"web":"#D7BFA3","name":"Soft Amber"},{"color":{"red":63,"green":50,"blue":28},"web":"#3F321C","name":"Mikado"},{"color":{"red":25,"green":18,"blue":14},"web":"#19120E","name":"Bokara Grey"},{"color":{"red":39,"green":45,"blue":71},"web":"#272d47","name":"Lucky Point"},{"color":{"red":177,"green":108,"blue":108},"web":"#b16c6c","name":"Coral Tree"},{"color":{"red":159,"green":151,"blue":154},"web":"#9f979a","name":"Shady Lady"}]}',
            artists: {
              gender: "M",
              details:
                "One of the greatest painters of the sixteenth century, Agnolo di Cosimo Tori, known as Bronzino, embodied the Mannerist style in the years of the government of Cosimo I de Medici.",
              artistId: 120,
              lastName: "Bronzino",
              firstName: "Agnolo",
              artistLink: "http://en.wikipedia.org/wiki/Bronzino",
              nationality: "Italy",
              yearOfBirth: 1503,
              yearOfDeath: 1572,
            },
            galleries: {
              latitude: 51.5086,
              galleryId: 5,
              longitude: -0.1283,
              yahooWoeId: 20094364,
              galleryCity: "London",
              galleryName: "National Gallery",
              flickrPlaceId: "1EPGyGtTUrrDXJmGCA",
              googlePlaceId: "ChIJeclqF84EdkgRtKAjTmWFr0I",
              galleryAddress: "Trafalgar Square",
              galleryCountry: "UK",
              galleryWebSite: "http://www.nationalgallery.org.uk/",
              galleryNativeName: "National Gallery",
            },
          },
          {
            paintingId: 384,
            imageFileName: 97010,
            title: "Virgin of the Rocks",
            shapeId: 1,
            museumLink:
              "https://www.nationalgallery.org.uk/paintings/leonardo-da-vinci-the-virgin-of-the-rocks",
            accessionNumber: "NG1093",
            copyrightText: "Creative Commons BY-NC-ND 4.0",
            description:
              "The Virgin of the Rocks (sometimes the Madonna of the Rocks) is the name used for two paintings by Leonardo da Vinci, of the same subject, and of a composition which is identical except for several significant details. The version generally considered the prime version, that is the earlier of the two, hangs in the Musee du Louvre in Paris and the other in the National Gallery, London. The paintings are both nearly 2 metres (over 6 feet) high and are painted in oils. Both were painted on wooden panel; that in the Louvre has been transferred to canvas. Both paintings show the Madonna and Christ Child with the infant John the Baptist and an angel, in a rocky setting which gives the paintings their usual name. The significant compositional differences are in the gaze and right hand of the angel. There are many minor ways in which the works differ, including the colours, the lighting, the flora, and the way in which sfumato has been used. Although the date of an associated commission is documented, the complete histories of the two paintings are unknown, and lead to speculation about which of the two is earlier.",
            excerpt:
              "The Virgin of the Rocks (sometimes the Madonna of the Rocks) is the name used for two paintings by Leonardo da Vinci, of the same subject, and of a composition which is identical except for several significant details.",
            yearOfWork: 1505,
            width: 190,
            height: 120,
            medium: "Oil on panel",
            cost: 600,
            MSRP: 670,
            googleLink: "",
            googleDescription: "",
            wikiLink: "http://en.wikipedia.org/wiki/Virgin_of_the_Rocks",
            jsonAnnotations:
              '{"safeSearchAnnotation":{"violence":1,"racy":1},"dominantColors":[{"color":{"red":48,"green":39,"blue":28},"web":"#30271c","name":"Black Magic"},{"color":{"red":37,"green":68,"blue":92},"web":"#25445c","name":"Regal Blue"},{"color":{"red":252,"green":252,"blue":249},"web":"#FCFCF9","name":"Ivory"},{"color":{"red":125,"green":110,"blue":99},"web":"#7d6e63","name":"Donkey Brown"},{"color":{"red":185,"green":173,"blue":167},"web":"#b9ada7","name":"Martini"},{"color":{"red":35,"green":93,"blue":97},"web":"#235d61","name":"Blue Stone"}]}',
            artists: {
              gender: "M",
              details:
                'Leonardo di ser Piero da Vinci was an Italian Renaissance polymath: painter, sculptor, architect, musician, mathematician, engineer, inventor, anatomist, geologist, cartographer, botanist, and writer. His genius, perhaps more than that of any other figure, epitomized the Renaissance humanist ideal. Leonardo has often been described as the archetype of the Renaissance Man, a man of \\"unquenchable curiosity\\" and \\"feverishly inventive imagination\\". He is widely considered to be one of the greatest painters of all time and perhaps the most diversely talented person ever to have lived. According to art historian Helen Gardner, the scope and depth of his interests were without precedent and \\"his mind and personality seem to us superhuman, the man himself mysterious and remote\\". Marco Rosci states that while there is much speculation about Leonardo, his vision of the world is essentially logical rather than mysterious, and that the empirical methods he employed were unusual for his time.',
              artistId: 97,
              lastName: "da Vinci",
              firstName: "Leonardo",
              artistLink: "http://en.wikipedia.org/wiki/Leonardo_da_Vinci",
              nationality: "Italy",
              yearOfBirth: 1452,
              yearOfDeath: 1519,
            },
            galleries: {
              latitude: 51.5086,
              galleryId: 5,
              longitude: -0.1283,
              yahooWoeId: 20094364,
              galleryCity: "London",
              galleryName: "National Gallery",
              flickrPlaceId: "1EPGyGtTUrrDXJmGCA",
              googlePlaceId: "ChIJeclqF84EdkgRtKAjTmWFr0I",
              galleryAddress: "Trafalgar Square",
              galleryCountry: "UK",
              galleryWebSite: "http://www.nationalgallery.org.uk/",
              galleryNativeName: "National Gallery",
            },
          },
          {
            paintingId: 157,
            imageFileName: 15060,
            title: "Young Spartans Exercising",
            shapeId: 2,
            museumLink:
              "https://www.nationalgallery.org.uk/paintings/hilaire-germain-edgar-degas-young-spartans-exercising",
            accessionNumber: "NG3860",
            copyrightText: "Creative Commons BY-NC-ND 4.0",
            description:
              "Young Spartans Exercising, also known as Young Spartans, is an oil on canvas painting by French impressionist artist Edgar Degas. The work depicts two groups of male and female Spartan youths exercising, though the subject matter of the painting has, in recent times, been challenged.",
            excerpt:
              "Young Spartans Exercising, also known as Young Spartans, is an oil on canvas painting by French impressionist artist Edgar Degas. The work depicts two groups of male and female Spartan youths exercising, though the subject matter of the painting has, in recent times, been challenged.",
            yearOfWork: 1860,
            width: 110,
            height: 155,
            medium: "Oil on canvas",
            cost: 180,
            MSRP: 220,
            googleLink: "",
            googleDescription: "",
            wikiLink: "http://en.wikipedia.org/wiki/Young_Spartans_Exercising",
            jsonAnnotations:
              '{"safeSearchAnnotation":{"violence":1,"racy":4},"dominantColors":[{"color":{"red":100,"green":85,"blue":39},"web":"#645527","name":"West Coast"},{"color":{"red":99,"green":80,"blue":47},"web":"#63502F","name":"Horses Neck"},{"color":{"red":130,"green":112,"blue":78},"web":"#82704E","name":"Shadow"},{"color":{"red":72,"green":53,"blue":24},"web":"#483518","name":"Clinker"},{"color":{"red":113,"green":78,"blue":39},"web":"#714E27","name":"Cafe Royale"},{"color":{"red":102,"green":110,"blue":82},"web":"#666e52","name":"Siam"}]}',
            artists: {
              gender: "M",
              details:
                "Edgar Degas, born Hilaire-Germain-Edgar De Gas, was a French artist famous for his work in painting, sculpture, printmaking and drawing. He is regarded as one of the founders of Impressionism although he rejected the term, and preferred to be called a realist. A superb draughtsman, he is especially identified with the subject of the dance, and over half of his works depict dancers. These display his mastery in the depiction of movement, as do his racecourse subjects and female nudes. His portraits are notable for their psychological complexity and depiction of human isolation.",
              artistId: 15,
              lastName: "Degas",
              firstName: "Edgar",
              artistLink: "http://en.wikipedia.org/wiki/Degas",
              nationality: "France",
              yearOfBirth: 1834,
              yearOfDeath: 1917,
            },
            galleries: {
              latitude: 51.5086,
              galleryId: 5,
              longitude: -0.1283,
              yahooWoeId: 20094364,
              galleryCity: "London",
              galleryName: "National Gallery",
              flickrPlaceId: "1EPGyGtTUrrDXJmGCA",
              googlePlaceId: "ChIJeclqF84EdkgRtKAjTmWFr0I",
              galleryAddress: "Trafalgar Square",
              galleryCountry: "UK",
              galleryWebSite: "http://www.nationalgallery.org.uk/",
              galleryNativeName: "National Gallery",
            },
          },
        ],
      ]);
    }
    fetchPaintings();
    // TODO render paintings
  }
  useEffect(() => {
    async function fetchselectedGallery() {
      // TODO Check local storage for the same api response, store api responses in local storage
      const url =
        "https://comp4513-a1-orlando-ormon.onrender.com/api/galleries";
      // console.log("Fetching from:" + url); uncomment after testing complete
      // const response = await fetch(url);
      // setGalleryList(await response.json());
      setGalleryList([
        {
          galleryId: 2,
          galleryName: "Prado Museum",
          galleryNativeName: "Museo del Prado",
          galleryCity: "Madrid",
          galleryAddress: "Paseo del Prado, s/n, 28014",
          galleryCountry: "Spain",
          latitude: 40.413393,
          longitude: -3.691953,
          galleryWebSite: "http://www.museodelprado.es/",
          flickrPlaceId: "XrSazRhTUrh4j1shyQ",
          yahooWoeId: 20219885,
          googlePlaceId: "ChIJ7aLYZp0oQg0RWoitk33wlBA",
        },
        {
          galleryId: 3,
          galleryName: "State Museum",
          galleryNativeName: "Staatliche Museen",
          galleryCity: "Berlin",
          galleryAddress: "Genthiner Str. 38 D",
          galleryCountry: "Germany",
          latitude: 52.50861,
          longitude: 13.36472,
          galleryWebSite: "http://www.smb.museum/",
          flickrPlaceId: "VULyzjBXVb89VXc",
          yahooWoeId: 675695,
          googlePlaceId: "ChIJ6c-eGLRRqEcR_S0RGNMMbWw",
        },
        {
          galleryId: 4,
          galleryName: "Uffizi Museum",
          galleryNativeName: "Galleria degli Uffizi",
          galleryCity: "Florence",
          galleryAddress: "Piazzale degli Uffizi, 6, 50122",
          galleryCountry: "Italy",
          latitude: 43.76863888,
          longitude: 11.25521,
          galleryWebSite:
            "http://www.polomuseale.firenze.it/en/musei/?m=uffizi",
          flickrPlaceId: "GKD_20BTUrvaoc1jyA",
          yahooWoeId: 20150278,
          googlePlaceId: "ChIJgZDFjQBUKhMRzcTwm8i33s0",
        },
        {
          galleryId: 5,
          galleryName: "National Gallery",
          galleryNativeName: "National Gallery",
          galleryCity: "London",
          galleryAddress: "Trafalgar Square",
          galleryCountry: "UK",
          latitude: 51.5086,
          longitude: -0.1283,
          galleryWebSite: "http://www.nationalgallery.org.uk/",
          flickrPlaceId: "1EPGyGtTUrrDXJmGCA",
          yahooWoeId: 20094364,
          googlePlaceId: "ChIJeclqF84EdkgRtKAjTmWFr0I",
        },
        {
          galleryId: 6,
          galleryName: "Metropolitan Museum of Art",
          galleryNativeName: "Metropolitan Museum of Art",
          galleryCity: "New York City",
          galleryAddress: "1000 5th Ave",
          galleryCountry: "USA",
          latitude: 40.7794472,
          longitude: -73.963111,
          galleryWebSite: "http://www.metmuseum.org",
          flickrPlaceId: "zzA0hmBTUb9GY797pA",
          yahooWoeId: 23511893,
          googlePlaceId: "ChIJb8Jg9pZYwokR-qHGtvSkLzs",
        },
        {
          galleryId: 7,
          galleryName: "National Gallery of Art",
          galleryNativeName: "National Gallery of Art",
          galleryCity: "Washington, DC",
          galleryAddress: "6th & Constitution Ave NW",
          galleryCountry: "USA",
          latitude: 38.89147,
          longitude: -77.02001,
          galleryWebSite: "http://www.nga.gov/content/ngaweb.html",
          flickrPlaceId: "i0jd9gJTWr3c.68Wbg",
          yahooWoeId: 28751392,
          googlePlaceId: "ChIJSYxSO5u3t4kRm4eyKw_Y7Kg",
        },
        {
          galleryId: 11,
          galleryName: "The Art Institute of Chicago",
          galleryNativeName: "The Art Institute of Chicago",
          galleryCity: "Chicago",
          galleryAddress: "111 S Michigan Ave",
          galleryCountry: "USA",
          latitude: 41.8794444,
          longitude: -87.62388,
          galleryWebSite: "http://www.artic.edu/",
          flickrPlaceId: "S7hSKqFTVr6exT4J",
          yahooWoeId: 2441891,
          googlePlaceId: "ChIJlUbZ4qMsDogR3tCinMzzKUg",
        },
        {
          galleryId: 13,
          galleryName: "Philadelphia Museum of Art",
          galleryNativeName: "Philadelphia Museum of Art",
          galleryCity: "Philadelphia",
          galleryAddress: "2600 Benjamin Franklin Pkwy",
          galleryCountry: "USA",
          latitude: 39.966,
          longitude: -75.181,
          galleryWebSite: "http://www.philamuseum.org/",
          flickrPlaceId: "xDQDYKNTVrp.RmQV",
          yahooWoeId: 2401619,
          googlePlaceId: "ChIJ_5CoRebFxokR08ApAyF2KIs",
        },
        {
          galleryId: 16,
          galleryName: "Louvre Museum",
          galleryNativeName: "Mus�e du Louvre",
          galleryCity: "Paris",
          galleryAddress: "Rue de Rivoli, 75001",
          galleryCountry: "France",
          latitude: 48.8611,
          longitude: 2.33638,
          galleryWebSite: "http://www.louvre.fr/",
          flickrPlaceId: "36CFHdZUV7KNOKK4LQ",
          yahooWoeId: 55843752,
          googlePlaceId: "ChIJ8XJ_6CVu5kcRWP1XT9TkBt4",
        },
        {
          galleryId: 17,
          galleryName: "Tate Britain",
          galleryNativeName: "Tate Britain",
          galleryCity: "London",
          galleryAddress: "Millbank, Westminster",
          galleryCountry: "UK",
          latitude: 51.490833,
          longitude: -0.127222,
          galleryWebSite: "http://www.tate.org.uk/visit/tate-britain",
          flickrPlaceId: "BjVxeKdVU7z_Fw",
          yahooWoeId: 41676,
          googlePlaceId: "ChIJvWjCxekEdkgRoCgQVJHZH_U",
        },
        {
          galleryId: 18,
          galleryName: "Art History Museum (Vienna)",
          galleryNativeName: "Kunsthistorisches Museum",
          galleryCity: "Vienna",
          galleryAddress: "Maria-Theresien-Platz, 1010",
          galleryCountry: "Austria",
          latitude: 48.2037,
          longitude: 16.3614,
          galleryWebSite: "http://www.khm.at/",
          flickrPlaceId: "GmGVGDJUV7vR.KE",
          yahooWoeId: 551756,
          googlePlaceId: "ChIJ8XfPY5oHbUcRQbimbLVSYG8",
        },
        {
          galleryId: 19,
          galleryName: "Musee d`Orsay",
          galleryNativeName: "Mus�e d`Orsay",
          galleryCity: "Paris",
          galleryAddress: "1 Rue de la L�gion d`Honneur",
          galleryCountry: "France",
          latitude: 48.86,
          longitude: 2.327,
          galleryWebSite: "http://www.musee-orsay.fr/",
          flickrPlaceId: ".jdUillUV7Kt1uHqAg",
          yahooWoeId: 55843777,
          googlePlaceId: "ChIJG5Qwtitu5kcR2CNEsYy9cdA",
        },
        {
          galleryId: 20,
          galleryName: "Museum of Modern Art",
          galleryNativeName: "Museum of Modern Art",
          galleryCity: "New York",
          galleryAddress: "11 W 53rd St",
          galleryCountry: "USA",
          latitude: 40.761484,
          longitude: -73.977664,
          galleryWebSite: "http://www.moma.org/",
          flickrPlaceId: "byMt1GpTWrhtqOpahg",
          yahooWoeId: 28288823,
          googlePlaceId: "ChIJKxDbe_lYwokRVf__s8CPn-o",
        },
        {
          galleryId: 22,
          galleryName: "Belvedere Gallery",
          galleryNativeName: "�sterreichische Galerie Belvedere",
          galleryCity: "Vienna",
          galleryAddress: "Schloss Belvedere, Prinz Eugen-Stra+�e 27, 1030",
          galleryCountry: "Austria",
          latitude: 48.19138,
          longitude: 16.38,
          galleryWebSite: "http://www.belvedere.at/",
          flickrPlaceId: "wVuFk_FUV7sGJng",
          yahooWoeId: 551795,
          googlePlaceId: "ChIJpZ4LAn0HbUcRMNCmNwlXeN8",
        },
        {
          galleryId: 24,
          galleryName: "Hermitage Museum",
          galleryNativeName: "Hermitage Museum",
          galleryCity: "St. Petersburg",
          galleryAddress: "Palace Square, 2",
          galleryCountry: "Russia",
          latitude: 59.941,
          longitude: 30.3129,
          galleryWebSite: "http://www.hermitagemuseum.org/",
          flickrPlaceId: "BfjabGxYUrw0knsYVA",
          yahooWoeId: 90600519,
          googlePlaceId: "ChIJ6eLLMgsxlkYR_F1QoCoDTgc",
        },
        {
          galleryId: 27,
          galleryName: "J. Paul Getty Museum",
          galleryNativeName: "J. Paul Getty Museum",
          galleryCity: "Los Angeles",
          galleryAddress: "1200 Getty Center Dr",
          galleryCountry: "USA",
          latitude: 34.0775,
          longitude: -118.475,
          galleryWebSite: "http://www.getty.edu/museum/",
          flickrPlaceId: "6A92XzRTWr3WXDwJwQ",
          yahooWoeId: 28751324,
          googlePlaceId: "ChIJpbxvgcW8woARza8I4QhFyyY",
        },
        {
          galleryId: 28,
          galleryName: "National Gallery of Norway",
          galleryNativeName: "Nationalgalleriet",
          galleryCity: "Oslo",
          galleryAddress: "Universitetsgata 13, 0164",
          galleryCountry: "Norway",
          latitude: 59.9162,
          longitude: 10.7375,
          galleryWebSite: "http://www.nasjonalmuseet.no/",
          flickrPlaceId: "lQQM7sZZVL.Hngs",
          yahooWoeId: 865764,
          googlePlaceId: "ChIJOdGZU3xuQUYRRpZUX1Z3YUM",
        },
        {
          galleryId: 29,
          galleryName: "Van Gogh Museum",
          galleryNativeName: "Van Gogh Museum",
          galleryCity: "Amsterdam",
          galleryAddress: "Museumplein 6, 1071 DJ",
          galleryCountry: "Netherlands",
          latitude: 52.358417,
          longitude: 4.881083,
          galleryWebSite: "http://www.vangoghmuseum.nl/",
          flickrPlaceId: "xfcEFYhWULKtjYI",
          yahooWoeId: 728410,
          googlePlaceId: "ChIJX1rTlu8JxkcRGsV8-a4oKMI",
        },
        {
          galleryId: 30,
          galleryName: "Rijksmuseum",
          galleryNativeName: "Rijksmuseum",
          galleryCity: "Amsterdam",
          galleryAddress: "Museumstraat 1, 1071 XX",
          galleryCountry: "Netherlands",
          latitude: 52.36,
          longitude: 4.885278,
          galleryWebSite: "http://www.rijksmuseum.nl/",
          flickrPlaceId: "xfcEFYhWULKtjYI",
          yahooWoeId: 728410,
          googlePlaceId: "ChIJ5Ra7we4JxkcRhYVAaq5zQ9U",
        },
        {
          galleryId: 32,
          galleryName: "Royal Picture Gallery Mauritshuis",
          galleryNativeName: "Royal Picture Gallery Mauritshuis",
          galleryCity: "The Hague",
          galleryAddress: "Plein 29, 2511 CS Den Haag",
          galleryCountry: "Netherlands",
          latitude: 52.080556,
          longitude: 4.314444,
          galleryWebSite: "http://www.mauritshuis.nl/",
          flickrPlaceId: "gycEsvZWUbkGyFQ",
          yahooWoeId: 733553,
          googlePlaceId: "ChIJEa9zVSO3xUcRXKUtUE5Qgbk",
        },
        {
          galleryId: 34,
          galleryName: "Musee du Petit Palais",
          galleryNativeName: "Petit Palais",
          galleryCity: "Paris",
          galleryAddress: "Avenue Winston Churchill, 75008",
          galleryCountry: "France",
          latitude: 48.866084,
          longitude: 2.314759,
          galleryWebSite: "http://www.parismusees.paris.fr/",
          flickrPlaceId: "a5KHUTVUVL6wFRTYsQ",
          yahooWoeId: 56448116,
          googlePlaceId: "ChIJSUOPztFv5kcRnEbSPYG-9fM",
        },
        {
          galleryId: 35,
          galleryName: "Solomon R. Guggenheim Museum",
          galleryNativeName: "Solomon R. Guggenheim Museum",
          galleryCity: "New York",
          galleryAddress: "1071 5th Ave",
          galleryCountry: "USA",
          latitude: 40.782975,
          longitude: -73.958992,
          galleryWebSite: "http://www.guggenheim.org/new-york",
          flickrPlaceId: "1AJK9adTWr3qYGsuLA",
          yahooWoeId: 28751193,
          googlePlaceId: "ChIJmZ5emqJYwokRuDz79o0coAQ",
        },
        {
          galleryId: 36,
          galleryName: "The Courtauld Institute of Art",
          galleryNativeName: "The Courtauld Institute of Art",
          galleryCity: "London",
          galleryAddress: "Strand",
          galleryCountry: "UK",
          latitude: 51.510833,
          longitude: -0.117222,
          galleryWebSite: "http://www.courtauld.ac.uk/",
          flickrPlaceId: "AZPsrPxTUbyolQ",
          yahooWoeId: 23636,
          googlePlaceId: "ChIJvZhvcMoEdkgRB5qnzGs_VNw",
        },
        {
          galleryId: 37,
          galleryName: "Barnes Foundation",
          galleryNativeName: "Barnes Foundation",
          galleryCity: "Philadelphia",
          galleryAddress: "2025 Benjamin Franklin Pkwy",
          galleryCountry: "USA",
          latitude: 39.960659,
          longitude: -75.172523,
          galleryWebSite: "http://www.barnesfoundation.org/",
          flickrPlaceId: "y3CJNJRTW7m785fi2A",
          yahooWoeId: 29389142,
          googlePlaceId: "ChIJrcsBU8vHxokR4FXP2BplJks",
        },
        {
          galleryId: 38,
          galleryName: "Sistine Chapel",
          galleryNativeName: "Sistine Chapel",
          galleryCity: "Rome",
          galleryAddress: "00120, Vatican City",
          galleryCountry: "Italy",
          latitude: 41.903056,
          longitude: 12.454444,
          galleryWebSite: "http://mv.vatican.va/",
          flickrPlaceId: "xfftaFtTUb6gXRUjTg",
          yahooWoeId: 23424986,
          googlePlaceId: "ChIJ268jxWVgLxMRIj61f4fIFqs",
        },
        {
          galleryId: 41,
          galleryName: "Picture Gallery (Berlin)",
          galleryNativeName: "Gem�ldegalerie",
          galleryCity: "Berlin",
          galleryAddress: "Matth�ikirchplatz, 10785",
          galleryCountry: "Germany",
          latitude: 52.508472,
          longitude: 13.365417,
          galleryWebSite: "http://www.smb.museum/",
          flickrPlaceId: "VULyzjBXVb89VXc",
          yahooWoeId: 675695,
          googlePlaceId: "ChIJveOIOrRRqEcRIsZHHE5dQxA",
        },
        {
          galleryId: 42,
          galleryName: "Brooklyn Museum",
          galleryNativeName: "Brooklyn Museum",
          galleryCity: "New York",
          galleryAddress: "200 Eastern Pkwy",
          galleryCountry: "USA",
          latitude: 40.671306,
          longitude: -73.96375,
          galleryWebSite: "http://www.brooklynmuseum.org/",
          flickrPlaceId: "9R6NtodTWr2le.Hw.A",
          yahooWoeId: 28751453,
          googlePlaceId: "ChIJyTmcRApbwokR-oXJRqpVI8Y",
        },
        {
          galleryId: 43,
          galleryName: "Old Masters Gallery",
          galleryNativeName: "Gem�ldegalerie Alte Meister",
          galleryCity: "Dresden",
          galleryAddress: "Theaterplatz 1, 01067",
          galleryCountry: "Germany",
          latitude: 51.053611,
          longitude: 13.734722,
          galleryWebSite: "http://www.skd.museum/",
          flickrPlaceId: "fr.j5iRTVLL4Bs4Wag",
          yahooWoeId: 26822156,
          googlePlaceId: "ChIJE6ZpuWjPCUcR0dN6tE-_u6o",
        },
        {
          galleryId: 49,
          galleryName: "Museum of Fine Arts",
          galleryNativeName: "Museum of Fine Arts",
          galleryCity: "Boston",
          galleryAddress: "465 Huntington Ave",
          galleryCountry: "USA",
          latitude: 42.339167,
          longitude: -71.094167,
          galleryWebSite: "http://www.mfa.org/",
          flickrPlaceId: "c1_W2UJUVL.DGU.MbQ",
          yahooWoeId: 56574533,
          googlePlaceId: "ChIJS3rn5w1644kRZNWVxNY_Ay8",
        },
        {
          galleryId: 50,
          galleryName: "National Gallery of Scotland",
          galleryNativeName: "National Gallery of Scotland",
          galleryCity: "Edinburgh",
          galleryAddress: "The Mound",
          galleryCountry: "Scotland",
          latitude: 55.950917,
          longitude: -3.195667,
          galleryWebSite: "http://www.nationalgalleries.org/",
          flickrPlaceId: "AtPXsOpTUrrN5fImVw",
          yahooWoeId: 20094252,
          googlePlaceId: "ChIJ68bm6kjGh0gRkyF0XlT5Rww",
        },
        {
          galleryId: 51,
          galleryName: "Albright-Knox Art Gallery",
          galleryNativeName: "Albright-Knox Art Gallery",
          galleryCity: "Buffalo",
          galleryAddress: "1285 Elmwood Ave",
          galleryCountry: "USA",
          latitude: 42.932078,
          longitude: -78.877072,
          galleryWebSite: "http://www.albrightknox.org/",
          flickrPlaceId: "dLCnqMtUV7L6BRUi6g",
          yahooWoeId: 55806539,
          googlePlaceId: "ChIJe6SdptAS04kRzppu7BanDfk",
        },
        {
          galleryId: 52,
          galleryName: "Detroit Institute of Arts",
          galleryNativeName: "Detroit Institute of Arts",
          galleryCity: "Detroit",
          galleryAddress: "5200 Woodward Ave",
          galleryCountry: "USA",
          latitude: 42.359292,
          longitude: -83.064797,
          galleryWebSite: "http://www.dia.org/",
          flickrPlaceId: "aLB8_gVUVLt45Q4MaQ",
          yahooWoeId: 56192713,
          googlePlaceId: "ChIJO6USub3SJIgRshN1AKZBH20",
        },
        {
          galleryId: 70,
          galleryName: "Indianapolis Museum of Art",
          galleryNativeName: "Indianapolis Museum of Art",
          galleryCity: "Indianapolis",
          galleryAddress: "4000 Michigan Rd",
          galleryCountry: "USA",
          latitude: 39.8259,
          longitude: -86.1855,
          galleryWebSite: "http://www.imamuseum.org/",
          flickrPlaceId: "42QAS0hTV7j9Fq9a",
          yahooWoeId: 2523727,
          googlePlaceId: "ChIJJYnup7pWa4gRheOf5vIg2JE",
        },
        {
          galleryId: 81,
          galleryName: "Brera Art Gallery",
          galleryNativeName: "Pinacoteca di Brera",
          galleryCity: "Milan",
          galleryAddress: "Via Brera, 28, 20121",
          galleryCountry: "Italy",
          latitude: 45.471944,
          longitude: 9.188056,
          galleryWebSite: "http://www.brera.beniculturali.it/",
          flickrPlaceId: "49Gidk1WU7JxrFY",
          yahooWoeId: 718345,
          googlePlaceId: "ChIJH05-WBHuhkcRNjexLI56Nhs",
        },
        {
          galleryId: 82,
          galleryName: "Leopold Museum",
          galleryNativeName: "Leopold Museum",
          galleryCity: "Vienna",
          galleryAddress: "Museumsplatz 1, A 1070",
          galleryCountry: "Austria",
          latitude: 48.202635,
          longitude: 16.359088,
          galleryWebSite: "https://www.leopoldmuseum.org",
          flickrPlaceId: "vyIUe41UV7uao.Y",
          yahooWoeId: 551801,
          googlePlaceId: "ChIJAzFFGJAHbUcROmKaJWvcKyE",
        },
      ]);
    }
    fetchselectedGallery();
  }, []);
  useEffect(() => {
    const galleryContainer = document.getElementById("galleryList");
    if (galleryList.length) {
      galleryList.forEach((g) => {
        const gHtml = document.createElement("div");
        gHtml.classList.add("galeryItem");
        gHtml.textContent = g.galleryName;
        gHtml.onclick = function () {
          setGallery(g);
          displayPaintings(selectedGallery);
        };
        galleryContainer.appendChild(gHtml);
      });
      setGallery(galleryList[0]);
      displayPaintings(galleryList[0]);
    }
  }, [galleryList]);
  // useEffect(() => {
  //   const galleryInfo = document.getElementById("galleryInfo");

  //   const galleryDiv = document.createElement("div");
  //   galleryDiv.style.border = "1px solid #ccc";
  //   galleryDiv.style.padding = "10px";
  //   galleryDiv.style.margin = "10px";
  //   galleryDiv.style.borderRadius = "5px";
  //   galleryDiv.style.boxShadow = "2px 2px 5px rgba(0, 0, 0, 0.1)";

  //   const title = document.createElement("h2");
  //   title.textContent = selectedGallery.galleryName;
  //   galleryDiv.appendChild(title);

  //   const nativeName = document.createElement("p");
  //   nativeName.textContent = `Native Name: ${selectedGallery.galleryNativeName}`;
  //   galleryDiv.appendChild(nativeName);

  //   const city = document.createElement("p");
  //   city.textContent = `City: ${selectedGallery.galleryCity}`;
  //   galleryDiv.appendChild(city);

  //   const address = document.createElement("p");
  //   address.textContent = `Address: ${selectedGallery.galleryAddress}`;
  //   galleryDiv.appendChild(address);

  //   const country = document.createElement("p");
  //   country.textContent = `Country: ${selectedGallery.galleryCountry}`;
  //   galleryDiv.appendChild(country);

  //   const website = document.createElement("p");
  //   const websiteLink = document.createElement("a");
  //   websiteLink.href = selectedGallery.galleryWebSite;
  //   websiteLink.textContent = "Visit Gallery";
  //   websiteLink.target = "_blank";
  //   website.appendChild(websiteLink);
  //   galleryDiv.appendChild(website);

  //   const favButton = document.createElement("button");
  //   favButton.textContent = "Add To Favourites";
  //   favButton.style.marginTop = "10px";
  //   favButton.onclick = function () {
  //     props.addToFavourites(selectedGallery);
  //   };
  //   galleryDiv.appendChild(favButton);
  //   galleryInfo.textContent = "";
  //   galleryInfo.appendChild(galleryDiv);
  // }, [selectedGallery]);
  return (
    <div class="w-full h-full">
      <Header redirect={props.redirect} />
      <div class="contentContainer flex flex-row">
        <div
          class="content galleryList w-1/5 overflow-auto max-h-100"
          id="galleryList"
        ></div>
        <div class="content galleryInfo w-2/5" id="galleryInfo">
          {selectedGallery && (
            <GalleryInfo
              selectedGallery={selectedGallery}
              addToFavourites={props.addToFavourites}
              displayPaintings={displayPaintings}
            />
          )}
        </div>
        <div class="content galleryPaintings w-2/5">
          {paintingList && (
            <PaintingsTable
              selectedGallery={selectedGallery}
              addToFavourites={props.ddToFavourites}
              paintingList={paintingList}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default GalleryView;
