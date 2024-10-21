import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Footer, Header } from './components/layouts';
import { ScrollBtn } from './components/elements';
import { URLS } from './utils';
import MainPage from './app/Main';
import AboutPage from './app/About';
import CategoriesPage from './app/Categories';
import SearchPage from './app/Search';
import FavoritesPage from './app/Favorites';
import CategoryPage from './app/templates/Category';
import RecipePage from './app/templates/Recipe';
import ProfilePage from './app/Profile';
import { ProtectedUser, ScrollToTop } from './components';

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path={URLS.MAIN} element={<MainPage />} />
        <Route path={URLS.ABOUT} element={<AboutPage />} />
        <Route path={URLS.CATEGORIES} element={<CategoriesPage />} />
        <Route path={URLS.SEARCH} element={<SearchPage />} />
        <Route path={URLS.CATEGORY} element={<CategoryPage />} />
        <Route path={URLS.RECIPE} element={<RecipePage />} />
        <Route path={URLS.FAVORITES} element={<ProtectedUser element={<FavoritesPage />} />} />
        <Route path={URLS.PROFILE} element={<ProtectedUser element={<ProfilePage />} />} />
        <Route path="*" element={<MainPage />} />
      </Routes>
      <Footer />
      <ScrollBtn />
    </Router>
  );
};

export default App;
