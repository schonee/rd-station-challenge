import React, { useState } from 'react';
import Form from './components/Form/Form';
import RecommendationList from './components/RecommendationList/RecommendationList';

function App() {
  const [recommendations, setRecommendations] = useState([]);

  return (
    <div className="bg-white min-h-screen px-4 py-10 md:px-8 flex items-start justify-center">
      <div className="w-full max-w-6xl space-y-12">
        <header className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900">
            Recomendador de Produtos
          </h1>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Encontre soluções da RD Station que se encaixam nas necessidades do seu negócio. Selecione suas preferências abaixo e receba recomendações personalizadas.
          </p>
        </header>

        <main className="bg-gray-50 border border-gray-200 rounded-2xl p-6 md:p-10 shadow-sm">
          <div className="space-y-6 text-gray-700 text-sm md:text-base leading-relaxed">
            <section>
              <p>
                Bem-vindo ao Recomendador de Produtos RD Station. Aqui você pode encontrar uma variedade de produtos da RD Station, cada um projetado para atender às necessidades específicas do seu negócio.
              </p>
              <p className="mt-2">
                De CRM a Marketing, de Conversas a Inteligência Artificial, temos uma solução para ajudar você a alcançar seus objetivos.
              </p>
              <p className="mt-2">
                Use o formulário abaixo para selecionar suas preferências e funcionalidades desejadas e receba recomendações personalizadas.
              </p>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
              <div className="md:border-r md:pr-6 border-gray-200">
                <Form setRecommendations={setRecommendations} />
              </div>
              <div className="md:pl-6">
                <RecommendationList recommendations={recommendations} />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
