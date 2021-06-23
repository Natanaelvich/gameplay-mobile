import React from 'react';

import { Container } from './styles';

import { Category } from '../Category';

import { categories } from '../../utils/categories';

type Props = {
  categorySelected: string;
  setCategory: (categoryId: string) => void;
};

export function CategorySelect({ categorySelected, setCategory }: Props) {
  return (
    <Container
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingRight: 40 }}
    >
      {categories.map(category => (
        <Category
          key={category.id}
          title={category.title}
          icon={category.icon}
          checked={category.id === categorySelected}
          onPress={() => setCategory(category.id)}
        />
      ))}
    </Container>
  );
}
