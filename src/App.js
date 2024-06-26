import { Route, Routes } from "react-router";
import { Home } from "./Components/Home";
import { useRef, useState } from "react";
import './App.css';
import AppContext from "./AppContext";
import { Products } from "./Components/Products";
import { ProductsWebsite } from "./Components/ProductsComponents/ProductsMenusComponents/ProductsWebsite";
import { NotFound } from "./Components/NotFound";
import { ProductsOnlineComplete } from "./Components/ProductsComponents/ProductsMenusComponents/ProductsOnlineComplete";
import { ProductsGoogleSearchAdvertising } from "./Components/ProductsComponents/ProductsMenusComponents/ProductsGoogleSearchAdvertising";
import { ProductsGoogleBannerAdvertising } from "./Components/ProductsComponents/ProductsMenusComponents/ProductsGoogleBannerAdvertising";
import { ProductsSocialMediaAdvertising } from "./Components/ProductsComponents/ProductsMenusComponents/ProductsSocialMediaAdvertising";
import { ProductsSearchEngineOptimization } from "./Components/ProductsComponents/ProductsMenusComponents/ProductsSearchEngineOptimization";
import { ProductsMarketingDataOnline } from "./Components/ProductsComponents/ProductsMenusComponents/ProductsMarketingDataOnline";
import { ProductsAdvertisementOnHerold } from "./Components/ProductsComponents/ProductsMenusComponents/ProductsAdvertisementOnHerold";
import { Advisors } from "./Components/Advisors";
import { AdvisorBeingVisibleOnline } from "./Components/AdvisorsComponents/AdvisorMenuComponents/AdvisorVisOnline";
// import { AdvisorVisOnlineNegReviews } from "./Components/AdvisorsComponents/AdvisorMenuComponents/AdvisorBeingVisibleOnlineComponents.jsx/AdvisorBeingVisibleOnlineSubComponents/AdvisorVisOnlineNegReviews";
import { AdvisorAllWebsites } from "./Components/AdvisorsComponents/AdvisorMenuComponents/AdvisorAllWebsites";
import { AdvisorsSEO } from "./Components/AdvisorsComponents/AdvisorMenuComponents/AdvisorsSEO";
import { AdvisorGoogleAds } from "./Components/AdvisorsComponents/AdvisorMenuComponents/AdvisorGoogleAds";
import { AdvisorEnc } from "./Components/AdvisorsComponents/AdvisorMenuComponents/AdvisorEnc";
import { AdvisorSMETips } from "./Components/AdvisorsComponents/AdvisorMenuComponents/AdvisorSMETips";
import { AdvisorStartUp } from "./Components/AdvisorsComponents/AdvisorMenuComponents/AdvisorStartUp";
import { AddCompany } from "./Components/FooterComponents/AddCompany";
import { Contact } from "./Components/Contact";
import { About } from "./Components/About";
import { IndustryAZ } from "./Components/FooterComponents/IndustryAZ";
import { IndustryAZActive } from "./Components/FooterComponents/IndustryAZComponents/IndustryAZActiveSearch/IndustryAZActive";
import { IndustryAZBreakdown } from "./Components/FooterComponents/IndustryAZComponents/IndustryAZBreakdown/IndustryAZBreakdown";
import { RestaurantAZ } from "./Components/FooterComponents/RestaurantAZ";
import { Login } from "./Components/Login";
import { Register } from "./Components/Register";
import { ForgotPswd } from "./Components/ForgotPswd";
import { ProductsContact } from "./Components/ProductsComponents/ProductsContact";
import { Blogs } from "./Components/LoginComponents/LoginMenuComponents/Blogs";
import { Reviews } from "./Components/LoginComponents/LoginMenuComponents/Reviews";
import { GiveReview } from "./Components/LoginComponents/LoginMenuComponents/GiveReview";
import { LoginValuation } from "./Components/LoginComponents/LoginMenuComponents/LoginValuation";
import { FreeCheck } from "./Components/FreeCheck";
import { LoginSubProfile } from "./Components/LoginComponents/LoginMenuComponents/LoginSubMenuComponents/LoginSubProfile";
import { LoginSubHome } from "./Components/LoginComponents/LoginMenuComponents/LoginSubMenuComponents/LoginSubHome";
import { LoginPswdReset } from "./Components/LoginComponents/LoginMenuComponents/LoginSubMenuComponents/LoginPswdReset";
import { AdvisorVisOnlineNegReviews } from "./Components/AdvisorsComponents/AdvisorMenuComponents/AdvisorBeingVisibleOnlineComponents.jsx/AdvisorVisOnlineSubComponents/AdvisorVisOnlineNegReviews";
import { AboutEditor } from "./Components/AboutEditor";
import { Legal } from "./Components/Legal";

import { CookiesProvider, useCookies } from 'react-cookie'
import { LoginReview } from "./Components/LoginComponents/LoginMenuComponents/LoginSubMenuComponents/LoginReview";
import { LoginSubscribe } from "./Components/LoginComponents/LoginMenuComponents/LoginSubMenuComponents/LoginSubscribe";
import { LoginNews } from "./Components/LoginComponents/LoginMenuComponents/LoginSubMenuComponents/LoginNews";
import { LoginPhotos } from "./Components/LoginComponents/LoginMenuComponents/LoginSubMenuComponents/LoginPhotos";
import { LoginCompFollow } from "./Components/LoginComponents/LoginMenuComponents/LoginSubMenuComponents/LoginCompFollow";
import { HomeCities } from "./Components/HomeComponents/HomeSubComponents/HomeCities";
import { IndustryAZList } from "./Components/FooterComponents/IndustryAZComponents/IndustryAZListSubComponents/IndustryAZList";
import { CompanyAZ } from "./Components/FooterComponents/CompanyAZ";
import { PeopleAZ } from "./Components/FooterComponents/PeopleAZ";
import { ExternalLogin } from "./Components/ExternalLogin";
import { LoginAfterReview } from "./Components/LoginComponents/LoginMenuComponents/LoginGiveReviewComponents/LoginAfterReviewElements/LoginAfterReview";
import { AddedCompany } from "./Components/FooterComponents/AddCompanyComponents/AddedCompany/AddedCompany";
import { LoginMyCompanies } from "./Components/LoginComponents/LoginMenuComponents/LoginSubMenuComponents/LoginMyCompanies";
import { UpdateCompanyDetails } from "./Components/FooterComponents/AddCompanyComponents/AddedCompany/UpdateCompanyDetails";
import { IndustrySearch } from "./Components/IndustrySearch";
import { SpecificBlog } from "./Components/LoginComponents/LoginMenuComponents/SpecificBlog";
import { SpecificReview } from "./Components/LoginComponents/LoginMenuComponents/SpecificReview";
import { IndustryAnotherList } from "./Components/FooterComponents/IndustryAZComponents/IndustryAZListSubComponents/IndustryAnotherList";
import { PeopleAZActive } from "./Components/FooterComponents/PeopleAZComponents/PeopleAZSubComponents/PeopleAZActive";
import { PeopleDetail } from "./Components/FooterComponents/PeopleAZComponents/PeopleAZSubComponents/PeopleDetail";
import { PeopleSearchActive } from "./Components/FooterComponents/PeopleAZComponents/PeopleAZSubComponents/PeopleSearchActive";
import { SpecificBlogCategory } from "./Components/LoginComponents/LoginMenuComponents/SpecificBlogCategory";
import { IndustryCitySearch } from "./Components/IndustryCitySearch";
import { IndustryCompanySearch } from "./Components/IndustryCompanySearch";
import { SpecificAdvisor } from "./Components/SpecificAdvisor";

function App() {
  const websiteRef = useRef(null);
  const onlineCompleteRef = useRef(null);
  const googleSearchRef = useRef(null);
  const googleBannerRef = useRef(null);
  const seoRef = useRef(null);
  const marketingRef = useRef(null);
  const [navselect, setNavSelect] = useState("search_company");
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsList, setProductsList] = useState();
  const [isMobile, setIsMobile] = useState(false);
  const [currentPage, setCurrentPage] = useState('');
  const [blogCategory, setSpecificBlogCategory] = useState();
  const [counselerList, setCounselerList] = useState([]);
  const [currentPageContent, setCurrentPageContent] = useState();
  const [productIdList, setProductIdList] = useState([]);
  const [productRecommendIdList, setProductRecommendIdList] = useState([]);
  const [productRecommendData, setProductRecommendData] = useState([]);
  const [counselerIdList, setCounselerIdList] = useState([]);
  const [articlesList, setArticlesList] = useState([]);
  const [articlePageContent, setArticlePageContent] = useState();
  const [curWidth, setCurWidth] = useState(window.innerWidth);
  const [advisorPageContent, setAdvisorPageContent] = useState();
  const [myCompanies, setMyCompanies] = useState();
  const [editorList, setEditorList] = useState([]);
  const [dataSource, setDataSource] = useState([]);
  const [companyAZList, setCompanyAZList] = useState();
  const [openingHours, setOpeningHours] = useState([]);
  const [industryAZList, setIndustryAZList] = useState([]);
  const [industryListWithAlpha, setIndustryListWithAlpha] = useState();
  const [condition, setCondition] = useState();
  const [cityContent, setCityContent] = useState();
  const [disclosure, setDisclosure] = useState();
  const [privacy, setPrivacy] = useState();
  const [aboutContent, setAboutContent] = useState();
  const [cityList, setCityList] = useState([]);
  const [imageGallery, setImageGallery] = useState([]);
  const [companyPersonalInfo, setCompanyPersonalInfo] = useState();
  const [userCompany, setUserCompany] = useState();
  const [cookies, setCookie, removeCookie] = useCookies(['token']);
  const [peopleAZList, setPeopleAZList] = useState([]);
  const [specificCompanyInfo, setSpecificCompanyInfo] = useState();
  const [specificIndustryList, setSpecificIndustryList] = useState([]);
  const [externalEmail, setExternalEmail] = useState('');
  const [externalPassword, setExternalPassword] = useState('');
  const [reviewReqBody, setReviewReqBody] = useState();
  const [externalShow, setExternalShow] = useState(false);
  const [externalGuestName, setExternalGuestName] = useState('');
  const [externalGuestEmail, setExternalGuestEmail] = useState('');
  const [specificUserCompany, setSpecificUserCompany] = useState();
  const [specificUserHoursDetails, setSpecificUserHoursDetails] = useState();
  const [specificUserPersonalInfo, setSpecificUserPersonalInfo] = useState();
  const [specificUserGallery, setSpecificUserGallery] = useState();
  const [specificUserCompanyProducts, setSpecificUserCompanyProducts] = useState();
  const [editorIdList, setEditorIdList] = useState([]);
  const [articleIdList, setArticleIdList] = useState([]);
  const [filteredArticlesList, setFilteredArticlesList] = useState();
  const [moreArticlesList, setMoreArticlesList] = useState([]);
  const [filteredArticlesIdList, setFilteredArticlesIdList] = useState([]);
  const [filteredEditorIdList, setFilteredEditorIdList] = useState([]);
  const [filteredEditorList, setFilteredEditorList] = useState([]);
  const [currentEditorList, setCurrentEditorList] = useState();
  const [industryCompaniesList, setIndustryCompaniesList] = useState([]);
  const [companyList, setCompanyList] = useState([]);

  const [specificIndustryCompanyList, setSpecificIndustryCompanyList] = useState([]);
  const [specificIndustryCityList, setSpecificIndustryCityList] = useState([]);
  const [reviewPageContent, setReviewPageContent] = useState([]);
  const [specificReviewPage, setSpecificReviewPage] = useState();
  const [sugCityList, setSugCityList] = useState([]);
  const [sugDistrictList, setSugDistrictList] = useState([]);
  const [blogsList, setBlogsList] = useState([]);
  const [aboutGradimoHome, setAboutGradimoHome] = useState();
  const [specificBlog, setSpecificBlog] = useState();
  const [specificPeople, setSpecificPeople] = useState();
  const [reviewPageList, setReviewPageList] = useState([]);
  const [companyIdList, setCompanyIdList] = useState();
  const [marketingGradimo, setMarketingGradimo] = useState();
  const [trustedImages, setTrustedImages] = useState();
  const [homeGradimo, setHomeGradimo] = useState();
  const [companyNameOnly, setCompanyNameOnly] = useState();
  const [cityOnly, setCityOnly] = useState();
  const [contactDetails, setContactDetails] = useState();
  const [gradimoContact, setGradimoContact] = useState();
  const [specificArticles, setSpecificArticles] = useState();
  const [paymentMethod, setPaymentMethod] = useState();
  const [specificUserCompanyServices, setSpecificUserCompanyServices] = useState();
  const [productsPage, setProductsPage] = useState();
  const [gradimoAdvicePage, setGradimoAdvicePage] = useState();
  const [gradimoAdvisorsPage, setGradimoAdvisorsPage] = useState();
  const [gradimoAdviceNow, setGradimoAdviceNow] = useState();
  const [gradimoReviewPage, setGradimoReviewPage] = useState();
  const [randomIndustries, setRandomIndustries] = useState([]);
  const [randomStates, setRandomStates] = useState([]);
  const [gradimoRateNowContent, setGradimoReviewNowContent] = useState();
  const [zipCodeList, setZipCodeList] = useState();
  const baseBackendRoute = "https://api.gradimo-skupaj.si";
  const baseFrontendRoute = "https://gradimo-skupaj.si"

  const handleWebsiteRef = () => {
    websiteRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'nearest'
    })
  }

  const handleOnlineCompleteRef = () => {
    onlineCompleteRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'nearest'
    })
  }
  const handleMarketingRef = () => {
    marketingRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'nearest'
    })
  }
  const handleGoogleSearchRef = () => {
    googleSearchRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'nearest'
    })
  }
  const handleGoogleBannerRef = () => {
    googleBannerRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'nearest'
    })
  }
  const handleSeoRef = () => {
    seoRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'nearest'
    })
  }

  
  return (
    <>
      <AppContext.Provider value={{ zipCodeList, setZipCodeList, randomStates, setRandomStates, randomIndustries, setRandomIndustries, gradimoRateNowContent, setGradimoReviewNowContent, gradimoAdviceNow, gradimoReviewPage, setGradimoReviewPage, setGradimoAdviceNow, gradimoAdvisorsPage, setGradimoAdvisorsPage, gradimoAdvicePage, setGradimoAdvicePage, aboutGradimoHome, setAboutGradimoHome, productsPage, setProductsPage, specificArticles, specificUserCompanyServices, setSpecificUserCompanyServices, paymentMethod, setPaymentMethod, setSpecificArticles, gradimoContact, setGradimoContact, contactDetails, setContactDetails, companyNameOnly, setCompanyNameOnly, cityOnly, setCityOnly, trustedImages, setTrustedImages, homeGradimo, setHomeGradimo, marketingGradimo, setMarketingGradimo, blogCategory, setSpecificBlogCategory, reviewPageList, companyIdList, setCompanyIdList, setReviewPageList, specificPeople, setSpecificPeople, specificBlog, setSpecificBlog, blogsList, setBlogsList, sugDistrictList, setSugDistrictList, sugCityList, setSugCityList, companyList, setCompanyList, specificReviewPage, setSpecificReviewPage, reviewPageContent, setReviewPageContent, specificIndustryCityList, setSpecificIndustryCityList, setSpecificIndustryCompanyList, specificIndustryCompanyList, industryCompaniesList, setIndustryCompaniesList, currentEditorList, setCurrentEditorList, editorList, setEditorList, filteredEditorList, setFilteredEditorList, filteredEditorIdList, setFilteredEditorIdList, setFilteredArticlesIdList, filteredArticlesIdList, moreArticlesList, setMoreArticlesList, filteredArticlesList, setFilteredArticlesList, articleIdList, setArticleIdList, editorIdList, setEditorIdList, specificUserGallery, setSpecificUserGallery, specificUserCompanyProducts, setSpecificUserCompanyProducts, specificUserPersonalInfo, setSpecificUserPersonalInfo, specificUserGallery, setSpecificUserGallery, specificUserHoursDetails, setSpecificUserHoursDetails, specificUserCompany, setSpecificUserCompany, myCompanies, setMyCompanies, externalGuestEmail, setExternalGuestEmail, externalGuestName, setExternalGuestName, externalEmail, setExternalEmail, externalPassword, setExternalPassword, externalShow, setExternalShow, reviewReqBody, setReviewReqBody, specificCompanyInfo, setSpecificCompanyInfo, specificIndustryList, setSpecificIndustryList, peopleAZList, setPeopleAZList, imageGallery, setImageGallery, openingHours, setOpeningHours, userCompany, setUserCompany, companyPersonalInfo, setCompanyPersonalInfo, companyAZList, setCompanyAZList, industryListWithAlpha, setIndustryListWithAlpha, industryAZList, setIndustryAZList, cityContent, setCityContent, cityList, setCityList, cookies, setCookie, removeCookie, baseFrontendRoute, aboutContent, setAboutContent, disclosure, setDisclosure, privacy, setPrivacy, condition, setCondition, dataSource, setDataSource, articlePageContent, setArticlePageContent, advisorPageContent, setAdvisorPageContent, counselerIdList, setCounselerIdList, articlesList, setArticlesList, counselerList, setCounselerList, productRecommendData, setProductRecommendData, productRecommendIdList, setProductRecommendIdList, productIdList, setProductIdList, baseBackendRoute, currentPage, setCurrentPage, currentPageContent, setCurrentPageContent, navselect, setNavSelect, isMobileMenuOpen, isMobile, setIsMobile, setMobileMenuOpen, handleGoogleBannerRef, marketingRef, websiteRef, onlineCompleteRef, googleBannerRef, googleSearchRef, seoRef, handleGoogleSearchRef, handleMarketingRef, handleOnlineCompleteRef, handleSeoRef, handleWebsiteRef, curWidth, setCurWidth, productsList, setProductsList }}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/marketing" element={<Products />}></Route>
          <Route path="/marketing/:id" element={<ProductsWebsite />}></Route>
          {/* <Route path="/marketing/onlinecomplete" element={<ProductsOnlineComplete />}></Route>
          <Route path="/marketing/gsa" element={<ProductsGoogleSearchAdvertising />}></Route>
          <Route path="/marketing/gba" element={<ProductsGoogleBannerAdvertising />}></Route>
          <Route path="/marketing/sma" element={<ProductsSocialMediaAdvertising />}></Route>
          <Route path="/marketing/seo" element={<ProductsSearchEngineOptimization />}></Route>
          <Route path="/marketing/mdo" element={<ProductsMarketingDataOnline />}></Route>
          <Route path="/marketing/aoh" element={<ProductsAdvertisementOnHerold />}></Route> */}
          <Route path="/adv" element={<Advisors />}></Route>
          <Route path="/adv/:id" element={<AdvisorBeingVisibleOnline />}></Route>
          <Route path="/adv/:id/:page" element={<AdvisorVisOnlineNegReviews />}></Route>
          {/* <Route path="/adv/all-website" element={<AdvisorAllWebsites />}></Route>
          <Route path="/adv/seo" element={<AdvisorsSEO />}></Route>
          <Route path="/adv/ga" element={<AdvisorGoogleAds />}></Route>
          <Route path="/adv/enc" element={<AdvisorEnc />}></Route>
          <Route path="/adv/sme" element={<AdvisorSMETips />}></Route>
          <Route path="/adv/start-up" element={<AdvisorStartUp />}></Route> */}
          <Route path="/add-company" element={<AddCompany />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/industry-az" element={<IndustryAZ />}></Route>
          <Route path="/industry-az/:alpha" element={<IndustryAZActive />}></Route>
          <Route path="/industry-az/breakdown" element={<IndustryAZBreakdown />}></Route>
          <Route path="/company-az/active/:company" element={<RestaurantAZ />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/forgot-pswd" element={<ForgotPswd />}></Route>
          <Route path="/advice-now" element={<ProductsContact />}></Route>
          <Route path="/reviews" element={<Reviews />}></Route>
          <Route path="/blogs" element={<Blogs />}></Route>
          <Route path="/give-rev/:review" element={<GiveReview />}></Route>
          <Route path="/login-val" element={<LoginValuation />}></Route>
          <Route path="/free-check" element={<FreeCheck />}></Route>
          <Route path="/user-profile" element={<LoginSubProfile />}></Route>
          <Route path="/login/home" element={<LoginSubHome />}></Route>
          <Route path="/pswd-reset" element={<LoginPswdReset />}></Route>
          <Route path="/about-editor/:edit" element={<AboutEditor />}></Route>
          <Route path="/login/review" element={<LoginReview />}></Route>
          <Route path="/login/subscribe" element={<LoginSubscribe />}></Route>
          <Route path="/legal/:id" element={<Legal />}></Route>
          <Route path="/after-rev/:user" element={<LoginAfterReview />}></Route>
          <Route path="/login/news" element={<LoginNews />}></Route>
          <Route path="/login/photos" element={<LoginPhotos />}></Route>
          <Route path="/login/comp-follow" element={<LoginCompFollow />}></Route>
          <Route path="/city/:id" element={<HomeCities />}></Route>
          <Route path="/industry/list/:industry" element={<IndustryAZList />}></Route>
          <Route path="/company-az/:alpha" element={<CompanyAZ />}></Route>
          <Route path="/people-az/:people" element={<PeopleAZ />}></Route>
          <Route path="/external-login" element={<ExternalLogin />}></Route>
          <Route path="/added-company" element={<AddedCompany />}></Route>
          <Route path="/login/companies" element={<LoginMyCompanies />}></Route>
          <Route path="/update-company-details/:company/" element={<UpdateCompanyDetails />}></Route>
          <Route path="/industry/search/:industry/:city/:open" element={<IndustrySearch />}></Route>
          <Route path="/industry/search/:industry/:city" element={<IndustrySearch />}></Route>
          <Route path="/industry/company/search/:company_only/" element={<IndustryCompanySearch />}></Route>
          <Route path="/industry/city/search/:city_only/" element={<IndustryCitySearch />}></Route>
          <Route path="/specific-blog/:blog/" element={<SpecificBlog />}></Route>
          <Route path="/blog-category/:blog/" element={<SpecificBlogCategory />}></Route>
          <Route path="/quality-review/:review/" element={<SpecificReview />}></Route>
          <Route path="/people-az/active/:people/" element={<PeopleAZActive />}></Route>
          <Route path="/people/detail/:people" element={<PeopleDetail />}></Route>
          <Route path="/people/search/:name/:address" element={<PeopleSearchActive />}></Route>
          <Route path="/specific-advisor/:article" element={<SpecificAdvisor />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </AppContext.Provider >

    </>
  );
}

export default App;
