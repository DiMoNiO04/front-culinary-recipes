import React from 'react';
import ModeratorCategories from '../moderatorCategories/ModeratorCategories';
import ModeratorRecipes from '../moderatorRecipes/ModeratorRecipes';
import { AdminModerMain } from '@/components/layouts';

const ModeratorPanel: React.FC = () => {
  const tabButtons = [
    { label: 'Categories', value: 'categories' },
    { label: 'Recipes', value: 'recipes' },
  ];

  const tabContents = {
    categories: <ModeratorCategories />,
    recipes: <ModeratorRecipes />,
  };

  return <AdminModerMain title="Moderator Panel" role="MODERATOR" tabContents={tabContents} tabButtons={tabButtons} />;
};

export default ModeratorPanel;
