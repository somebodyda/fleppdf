import React from "react";
import HTMLFlipBook from "react-pageflip";

const PageCover = React.forwardRef((props, ref) => {
  return (
    <div className="" ref={ref} data-density="hard">
      {props.children}
    </div>
  );
});

const Book = React.forwardRef((props, ref) => {
  return (
    <div className="w-[100%] h-[100%]" ref={ref}>
      <div className="page-content">
        <div className="">{props.children}</div>
        <div className="text-white px-2 rounded-full bg-black  right-4 flex text-2xl font-black fixed bottom-4">
          {props.number + 1}
        </div>
      </div>
    </div>
  );
});

function App() {
  return (
    <div className="bg-black h-screen w-screen justify-center items-center flex overflow-hidden">
      <HTMLFlipBook
        width={350}
        height={700}
        // size="stretch"
        minWidth={315}
        // maxWidth={1000}
        minHeight={400}
        // maxHeight={1533}
        maxShadowOpacity={0.5}
        mobileScrollSupport={true}
        className="bg-white max-h-[300px] border-red-500 m-2 overflow-hidden"
      >
        <PageCover className="flex shadow-[inset_-7px_0px_22px_0px_#00000024]">
          <img src="./book/cover.jpg" alt="" className="w-full h-full " />
        </PageCover>
        <Book number={0} className={"w-full h-full"}>
          <h2 className="flex text-center justify-center items-center text-4xl font-bold mt-32 mx-2 capitalize ">
            desgned and developed by kiya legesse
          </h2>
        </Book>
        <Book number={1}>
          <h2 className="flex text-center text-4xl font-bold mt-32 mx-4 capitalize">
            ዛሩጣ ምግብ ስትፈልግ ስትፈልግ ስትፈልግ ስትፈልግ ቆየችና አገኘች፡፡ ምን አገኘች መሰላችሁ? እስቲ ገምቱ፡፡
            አንድ ትንሽ ልጅ ሳይከድን ያስቀመጠውን ዳቦ ነበር፡፡ ከዚያ ልጁ ሳይመጣባት ቶሎ ቶሎ በላችና የቀረውን ይዛ
            ወደቤቷ ተመለሰች፡፡
          </h2>
        </Book>
        <Book number={2}>
          <img
            src="./book/image1.jpeg"
            alt=""
            className="w-full h-full  rounded-3xl"
          />
          <h4 className="font-bold text-xl">
            እቤቷ ደርሳ ስታይ እናቷ ለካ ተመልሳ ተኝታለች፡፡ እንቅልፍ ወስዷታል፡፡የዛሩጣ አባት አቶ ኩርኩራ ደግሞ ለካ
            ምግብ ፍለጋ ሔዷል፡፡ እቤት የለም፡፡ ዛሩጣ ያመጣችውን ዳቦ ይዛ ቁጭ አለችና አሰበች፡፡
          </h4>
        </Book>
        <Book number={3}>
          <h4 className="font-bold text-xl mx-2 mt-6">
            በቃ፤እማዬ ተኝታለች፤ አባዬም የለም:: ሁሉንም እኔ ልብላው» አለች፡፡ ከዚያ ስትበላ÷ ስትበላ፥ ስትበላ
            በጣም ጠገበች::ሆዷ ተነፋና አመማት፡፡ ልጆች የጥጋብ በሽታ ቁንጣን ይባላል፡፡ ቁንጣን ያዛት፡፡ ተኛችና
          </h4>
          <img
            src="./book/image3.jpeg"
            alt=""
            className="w-full h-full  rounded-3xl"
          />
        </Book>
        <Book number={4}>
          <h4 className="font-bold text-xl mx-2 mt-6">
            «አ! ወይኔ እማዬ! አባዬ! ሆዴን አመመኝ ...» አለች፡፡ በዚህ ጊዜ አባቷ አቶ ኩርኩሬ ያገኘውን ዳቦ ይዞ
            ከሔደበት ተመለሰ፡፡
          </h4>
          <img
            src="./book/image4.jpeg"
            alt=""
            className="w-[70%] h-[90%] mx-auto rounded-3xl"
          />
          <h4 className="font-bold text-xl mx-2 mt-6">
            የዛሩጣ እናት ወይዘሮ መሩጣ ወደዛሩጣ መጣችና <br /> «ምን ሆንሽ?» አለቻት፡፡
            <br /> «እኔ እንጃ እማዬ!ሆዴን አሞኛል» አለች ዛሩጣ::
            <br /> «ምን በልተሽ ነበር ... ?» ብላ እናቷ ጠየቀቻት፡፡
            <br /> «ምንም አልበላሁም» ብላ ዋሸች ዛሩጣ፡፡ <br />
            «ታዲያ ሆድሽ ምን ሆኖ ነው በኃይል የተነፋው?»
          </h4>
        </Book>
        <Book number={5}>
          <h4 className="font-bold text-xl mx-2 mt-6">
            በዚህ ጊዜ ዛሩጣ ዐፈረች። በመዋሽቷም ተጸጸተች:: ተነሥታ ወደ እናቷ ተጠጋችና <br />
            «ብዙ ስለ በላሁ ነው የታመምኩት እማዬ! በመዋሸቴ ይቅርታ አድርጊልኝ» አለች፡፡
            <br /> «ከጠገብሽ በኋላ ብዙ አትብይ÷ ቁንጣን ይይዝሻል አላልኩሽም? ደግሞ አትዋሺ አላልኩሽም?»
            አለቻት። <br />
            ሁለተኛ አልዋሽም እማዬ» አለች ዛሩጣ፡፡ ‹‹በይ ተኚና ዕረፍት አድርጊ ይሻልሻል» አለቻት እናቷ።
            <br /> ዛሩጣ ከእንቅልፏ ስትነቃ ብዙ የአይጥ እንግዶችእቤታቸው ተሰብስበው ያወሩ ነበር፡፡ ቀስ ብላ
            ተነሣችና ለሁሉም ሰላምታ ሰጥታ እንደገና ወደ ምግብ ፍለጋዋ ሔደች።
            <br /> አንድ ቤት ውስጥ ገብታ ምግብ ስትሰርቅ ማሙሽ የሚባል ልጅ አያት ደነገጠች:: ማሙሽም ደነገጠና
            ሔዶ ለእናቱ ነገራቸው፡፡ የማሙሽ እናት ዛሩጣን በዱላ ሊገድሏት ነበር፡፡ በእግራቸው ሥር ሾልካ አመለ
            ጠቻቸው፡፡ ማሙሽ «ወይኔ! አይጧ ምግቤን በላችብኝ!» ብሎ አለቀሰ፡፡ <br />
            እናቱ ደግሞ «አይጧ ምግብህን የበላችብህኮ በደንብ ከድነህ ስላላስቀመጥከው ነው፤ለወደፊቱ በደንብ ከድነህ
            አስቀምጥ» አሉት፡፡
          </h4>
        </Book>
        <Book number={6}>
          <h4 className="font-bold text-xl mx-2 mt-6">
            ዛሩጣ ከዚያ ተመልሳ እቤቷ ስትገባ አባቷ ተቆጣት᎓᎓ «ምን አጠፋሁ አባዬ?» አለች፡፡ «የት ሔደሽ ነው
            የጠፋሽው? ዛሩጣ ዘረጥራጣ?!» ብሎ ተቆጣት
            <br /> «ምግብ ፍለጋ ሔጄ ነው» አለች ዛሩጣ፡፡ «ቅድም ያየሻቸው አንግዶች ሄቼቤሬ የሚባል ባል
            አምጥተውልሽ ነበር» አላት አባትዬው፡፡
            <br /> «እምቢዬው አባዬ! እኔ ባል አልፈልግም!» አለች ዛሩጣ እየተነጫነጨች:: <br />
            «እንዴት እባክሽ! ባል ማግባት አለብሽ! አባትሽ ስለሆንኩ እድርሻለሁ!» አላት::
            <br /> «ባላገባስ አባዬ! ቢቀርብኝስ?» «አየሽ ዛሩጣ ወልደሽ ዘር መተካት አለብሽ፡፡
            <br />
            የራስሽ የወንድ ጓደኛ ማግኘት ይገባሻል፡፡ የሰው ልጆች ይማራሉ::
            <br />
            ሥራ ይሠራሉ፡፡ ወላጆቻቸውንና አገራቸውን ይረዳሉ፡፡ <br />
            እኛ ግን አንማርም፡፡ ስለዚህ ተጋብተን ወላጆቻችንን መርዳት አንቺም አግብተሽ ከነባልሽ እኛን እርጂን ገባሽ
            ዛሩጣ ዘረጥራጣዬ!» አላት፡፡
            <br />
            ዛሩጣ አለቀሰች፡፡ አባቷም ተቆጣትና ‹‹እኔ አባትሽ የምልሽን አትቀበይም?» አላት፡፡
          </h4>
        </Book>
        <Book number={7}>
          <h4 className="font-bold text-xl mx-2 mt-6">
            ዛሩጣ አባቷ ስለ ተቆጣና ስለ አዘነ እሷም አዘ ነች፡፡ በኋላ ወደ አባቷ ተጠጋችና <br />
            «እሺ አባዬ ምክርህን እቀበላለሁ፤ ትዕዛዝህን አከብራለሁ» አለች ደስ አለውና እቅፍ አደረጋት፡፡
            <br /> ከዚያ በኋላ ሠርጉ መዘጋጀት ጀመረ። ድግስ ይደገስ ጀመረ። የዛሩጣ ጙደኞችን መልኻን አሳመሩት።
            ገላዋን አጠቯጥ። ሠርጉ የጠደጘሸው ባንድ ሰው ቤት ጛዳ ውስጥ ነበር።
            <br /> ከሰዓት በሃላ ሙሽራው ሄቼቤሬ ጥቁር በጥቁር የሆነ ልብስ ለብሶ ከነሚዜዎቹ መጣ። ለሳ ጥሎሽ ስላላ
            የባቄላና የሀያ የሽንብራ ፍሬዎች አመጡላት።
            <br /> ከዚያ ከተጋበዙና ጭፈራውን ሁሉ ካዩ በኋላ ሄቼቤሬ ዛሩጣን ይዛት ሊሔድ ተነሣ:: ከመሔዳቸው በፊት
            ዛሩጣ ከናትና ካባቷ ለመስናበት ወደነሱ ቀረበች
            <br /> በዚህ ጊዜ በድንገት አንድ የኳኳታ ድምጽ ተሰማ ሁሉም ደነገጡ፡። ወዲያው ባለቤቱ ትልቅ ዱላ ይዞ
            መጣባቸው። ዱላውን ሲያዩ እነዛሩጣና ሰርገኞቹ ሁሉ ሸሹ! ዲዲዲዲዲዲ ... አሉ፡፡
            <br /> ፄቼቤሬና ዛሩጣ ባንድ በኩል ወደጫካ ሮጡና አመለጡ።
            <br /> «ሁለተኛ ሰው ቤት እየገባን አንሰርቅም! ከጫካ ፍራፍሬ እየለቀምን እንበላለን! እንኳን ዛሬ
            ተረፍን አሉ
          </h4>
        </Book>
        <PageCover>
          <div className="w-full h-full bg-yellow-900 flex text-center items-center justify-center">
            <h2 className="text-center text-9xl -pt-32 font-black">አለቀ</h2>
          </div>
        </PageCover>
      </HTMLFlipBook>
    </div>
  );
}

export default App;
