import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import LandingPage from './pages/LandingPage';
import HomePage from './pages/HomePage';
import NotePage from './pages/NotePage';
import Layout from './Layout';
import React from 'react';

const App = () => {
   const queryClient = new QueryClient()

   return (
      <BrowserRouter>
         <QueryClientProvider client={queryClient}>
            <Layout>
               <Routes>
                  <Route path='/' element={<LandingPage />} />
                  <Route path='/home' element={<HomePage />} />
                  <Route path='/note' element={<NotePage />} />
               </Routes>
            </Layout>
         </QueryClientProvider>
      </BrowserRouter>
   );
}

export default App;