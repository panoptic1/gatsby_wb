import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import styled from 'styled-components';

const ToppingStyles = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 4rem;
  a {
    display: grid;
    padding: 5px;
    grid-template-columns: auto 1fr;
    grid-gap: 0 1rem;
    background: var(--grey);
    align-items: center;
    border-radius: 2px;
    .count {
      background: white;
      padding: 2px 5px;
    }
    &[aria-current='page'] {
      background: var(--yellow);
    }
  }
`;
function countPizzasWithTopping(pizzas) {
  // Return the pizzas with a given topping
  console.log(pizzas);
  const counts = pizzas
    .map((pizza) => pizza.toppings)
    .flat()
    .reduce((acc, topping) => {
      // check if this is an existing topping
      const existingTopping = acc[topping.id];
      // if it is, increment by 1
      if (existingTopping) {
        console.log(`Existing Topping: `, existingTopping.name);
        existingTopping.count += 1;
      }
      // otherwise create a new entry in our acc and set it to one
      else {
        console.log(`New Topping: `, topping.name);
        acc[topping.id] = {
          id: topping.id,
          name: topping.name,
          count: 1,
        };
      }
      return acc;
    }, {});
  const sortedToppings = Object.values(counts).sort(
    (a, b) => b.count - a.count
  );
  return sortedToppings;
}

export default function ToppingsFilter({ activeTopping }) {
  // Get a list of all of the toppings
  // Get a list of all of the Pizzas with their toppings
  const { toppings, pizzas } = useStaticQuery(graphql`
    query {
      toppings: allSanityTopping {
        nodes {
          name
          id
          vegetarian
        }
      }
      pizzas: allSanityPizza {
        nodes {
          toppings {
            name
            id
          }
        }
      }
    }
  `);

  // Count how many pizzas are in each topping
  const pizzasWithTopping = countPizzasWithTopping(pizzas.nodes);
  console.log(pizzasWithTopping);

  // Link it up...
  return (
    <ToppingStyles>
      <Link to="/pizzas">
        <span className="name">All</span>
        <span className="count">{pizzas.nodes.length}</span>
      </Link>
      {pizzasWithTopping.map((topping) => (
        <Link
          to={`/topping/${topping.name}`}
          key={topping.id}
          // className={topping.name === activeTopping ? 'active' : ''}
          // ^^^ not necessary because of automatic 'aria-current' class furnished by gatsby
        >
          <span className="name">{topping.name}</span>
          <span className="count">{topping.count}</span>
        </Link>
      ))}
    </ToppingStyles>
  );
}
