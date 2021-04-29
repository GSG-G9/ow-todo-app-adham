import React from "react";

import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import TodoList from '../components/TodosList';
import '../styles/global.css'

export default function Home({ data }) {
  const { title } = data.site.siteMetadata;
  return (
    <Layout>
      <section>
        <div>
          <h3>{title}</h3>
        </div>
        <TodoList/>
      </section>
    </Layout>
  )
};

export const query = graphql`
  query SiteIfo {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
