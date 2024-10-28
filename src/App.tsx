import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Footer, Header } from './components/layouts';
import { ScrollBtn } from './components/elements';
import { EUrls } from './utils';
import MainPage from './app/Main';
import AboutPage from './app/About';
import CategoriesPage from './app/Categories';
import SearchPage from './app/Search';
import FavoritesPage from './app/Favorites';
import CategoryPage from './app/templates/Category';
import RecipePage from './app/templates/Recipe';
import ProfilePage from './app/Profile';
import { ProtectedUser, ScrollToTop } from './components';
import AdminPage from './app/AdminPage';
import ManagerPage from './app/ManagerPage';

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path={EUrls.MAIN} element={<MainPage />} />
        <Route path={EUrls.ABOUT} element={<AboutPage />} />
        <Route path={EUrls.CATEGORIES} element={<CategoriesPage />} />
        <Route path={EUrls.SEARCH} element={<SearchPage />} />
        <Route path={EUrls.CATEGORY} element={<CategoryPage />} />
        <Route path={EUrls.RECIPE} element={<RecipePage />} />
        <Route path={EUrls.FAVORITES} element={<ProtectedUser element={<FavoritesPage />} />} />
        <Route path={EUrls.PROFILE} element={<ProtectedUser element={<ProfilePage />} />} />
        <Route path={EUrls.ADMIN} element={<ProtectedUser element={<AdminPage />} />} />
        <Route path={EUrls.MANAGER} element={<ProtectedUser element={<ManagerPage />} />} />
        <Route path="*" element={<MainPage />} />
      </Routes>
      <Footer />
      <ScrollBtn />
    </Router>
  );
};

export default App;
