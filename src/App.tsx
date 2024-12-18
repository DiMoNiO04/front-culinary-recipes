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
import NotFoundPage from './app/NotFound';
import RecipesPage from './app/Recipes';
import RecipesUserPage from './app/RecipesUser';
import CreateRecipePage from './app/CreateRecipe';
import UpdateRecipePage from './app/UpdateRecipe';

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path={EUrls.MAIN} element={<MainPage />} />
        <Route path={EUrls.ABOUT} element={<AboutPage />} />
        <Route path={EUrls.CATEGORIES} element={<CategoriesPage />} />
        <Route path={`${EUrls.CATEGORIES}/:name`} element={<CategoryPage />} />
        <Route path={EUrls.SEARCH} element={<SearchPage />} />
        <Route path={EUrls.RECIPES} element={<RecipesPage />} />
        <Route path={`${EUrls.RECIPE}/:id`} element={<RecipePage />} />

        <Route path={EUrls.FAVORITES} element={<ProtectedUser element={<FavoritesPage />} />} />
        <Route path={EUrls.PROFILE} element={<ProtectedUser element={<ProfilePage />} />} />
        <Route path={EUrls.PROFILE_RECIPES} element={<ProtectedUser element={<RecipesUserPage />} />} />
        <Route path={EUrls.CREATE_RECIPE} element={<ProtectedUser element={<CreateRecipePage />} />} />
        <Route path={`${EUrls.UPDATE_RECIPE}/:id`} element={<ProtectedUser element={<UpdateRecipePage />} />} />

        <Route path={EUrls.ADMIN} element={<ProtectedUser element={<AdminPage />} />} />
        <Route path={EUrls.MANAGER} element={<ProtectedUser element={<ManagerPage />} />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
      <ScrollBtn />
    </Router>
  );
};

export default App;
