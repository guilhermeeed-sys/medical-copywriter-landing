import React, { useState, useEffect } from 'react';
import { ChevronDown, CheckCircle, ArrowRight, Star } from 'lucide-react';

export default function MedicalCopywriterLanding() {
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('basic');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-white text-gray-900 overflow-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-900">Guilherme D</div>
          <button className="bg-blue-900 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition">
            Agendar Consulta
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-blue-50 via-white to-slate-50">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="inline-block bg-blue-100 text-blue-900 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            ✨ Copywriting Médico que Converte Pacientes
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 text-gray-900">
            Sua clínica tem pacientes <span className="text-blue-900">que deveriam ter</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto">
            Textos que transformam visitantes em pacientes. Legendas que geram marcações. Copy que faz a diferença entre uma clínica conhecida e uma clínica <em>procurada</em>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="bg-blue-900 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-800 transition flex items-center justify-center gap-2">
              Começar Agora <ArrowRight size={20} />
            </button>
            <button className="border-2 border-blue-900 text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition">
              Ver Portfolio
            </button>
          </div>

          <div className="grid grid-cols-3 gap-4 text-center text-sm">
            <div>
              <div className="text-3xl font-bold text-blue-900">50+</div>
              <p className="text-gray-600">Clínicas Atendidas</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-900">300%</div>
              <p className="text-gray-600">Aumento Médio em Conversões</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-900">4.9★</div>
              <p className="text-gray-600">Avaliação dos Clientes</p>
            </div>
          </div>
        </div>
      </section>

      {/* O Problema */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">O Problema Real</h2>
          
          <div className="bg-red-50 border-l-4 border-red-500 p-8 rounded-r-lg mb-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              Sua clínica tem um site bonito. As redes sociais estão ativas. O consultório está bem decorado. Mas os pacientes não chegam na quantidade que deveriam.
            </p>
          </div>

          <div className="space-y-6 mb-8">
            <div className="flex gap-4">
              <div className="text-2xl">❌</div>
              <div>
                <h3 className="font-bold text-lg mb-2">Textos genéricos que não convertem</h3>
                <p className="text-gray-600">Legendas que ninguém lê. Descrições que parecem iguais às dos concorrentes.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-2xl">❌</div>
              <div>
                <h3 className="font-bold text-lg mb-2">Falta de planejamento editorial</h3>
                <p className="text-gray-600">Posts aleatórios que não geram autoridade ou confiança.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-2xl">❌</div>
              <div>
                <h3 className="font-bold text-lg mb-2">Copy que não toca nas dores dos pacientes</h3>
                <p className="text-gray-600">Mensagens que falam de você, não do que o paciente realmente precisa.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* A Solução */}
      <section className="py-20 px-6 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">A Solução</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-blue-800 p-8 rounded-lg">
              <div className="text-3xl mb-4">📝</div>
              <h3 className="text-2xl font-bold mb-4">Copy que Converte</h3>
              <p className="text-blue-100 leading-relaxed">
                Cada palavra é pensada para tocar na dor do paciente, gerar confiança e criar urgência para marcar a consulta.
              </p>
            </div>
            <div className="bg-blue-800 p-8 rounded-lg">
              <div className="text-3xl mb-4">📊</div>
              <h3 className="text-2xl font-bold mb-4">Estratégia Editorial</h3>
              <p className="text-blue-100 leading-relaxed">
                Planejamento mensal que posiciona sua clínica como referência. Consistência que gera resultados.
              </p>
            </div>
            <div className="bg-blue-800 p-8 rounded-lg">
              <div className="text-3xl mb-4">🎬</div>
              <h3 className="text-2xl font-bold mb-4">Roteiros para Vídeos</h3>
              <p className="text-blue-100 leading-relaxed">
                Scripts profissionais que aumentam o engajamento e estabelecem você como autoridade na sua área.
              </p>
            </div>
            <div className="bg-blue-800 p-8 rounded-lg">
              <div className="text-3xl mb-4">✅</div>
              <h3 className="text-2xl font-bold mb-4">Revisão Contínua</h3>
              <p className="text-blue-100 leading-relaxed">
                Ajustes e otimizações baseadas em resultados reais. Copy que evolui com sua clínica.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Prova Social - Depoimentos */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">O Que Meus Clientes Dizem</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Depoimento 1 */}
            <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-blue-900">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />)}
              </div>
              <p className="text-gray-700 mb-4 italic">
                "Contratei o Guilherme para melhorar nosso Instagram. Em 3 meses, aumentamos em 40% o número de agendamentos. As legendas dele realmente convertem."
              </p>
              <div className="font-bold">Dr. Felipe M. - Dermatologista</div>
              <div className="text-sm text-gray-600">São Paulo, SP</div>
            </div>

            {/* Depoimento 2 */}
            <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-blue-900">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />)}
              </div>
              <p className="text-gray-700 mb-4 italic">
                "A estratégia editorial mensal transformou nossa presença online. Agora as pessoas nos veem como referência, não só como mais uma clínica."
              </p>
              <div className="font-bold">Dra. Ana Silva - Cardiologista</div>
              <div className="text-sm text-gray-600">Rio de Janeiro, RJ</div>
            </div>

            {/* Depoimento 3 */}
            <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-blue-900">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />)}
              </div>
              <p className="text-gray-700 mb-4 italic">
                "Os roteiros para vídeos do Guilherme são profissionais e fáceis de executar. Nossos vídeos agora geram 3x mais engajamento."
              </p>
              <div className="font-bold">Dr. Lucas Costa - Ortopedista</div>
              <div className="text-sm text-gray-600">Belo Horizonte, MG</div>
            </div>

            {/* Depoimento 4 */}
            <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-blue-900">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />)}
              </div>
              <p className="text-gray-700 mb-4 italic">
                "Não sou copywriter, então contratar alguém que realmente entende do meu segmento foi a melhor decisão. Resultados em semanas."
              </p>
              <div className="font-bold">Dra. Mariana Reis - Oftalmologista</div>
              <div className="text-sm text-gray-600">Curitiba, PR</div>
            </div>
          </div>
        </div>
      </section>

      {/* Planos e Preços */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">Planos Ajustados ao Seu Negócio</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Escolha o plano que faz sentido para sua clínica</p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Plano Básico */}
            <div className={`p-8 rounded-lg border-2 transition ${activeTab === 'basic' ? 'border-blue-900 bg-blue-50' : 'border-gray-200'}`}>
              <h3 className="text-2xl font-bold mb-2">Plano Básico</h3>
              <p className="text-gray-600 mb-6">Perfeito para começar</p>
              
              <div className="mb-8">
                <span className="text-4xl font-bold text-blue-900">R$ 800</span>
                <span className="text-gray-600">/mês</span>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-green-500 flex-shrink-0 mt-1" />
                  <span>12 legendas para Instagram</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-green-500 flex-shrink-0 mt-1" />
                  <span>4 roteiros para vídeos curtos</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-green-500 flex-shrink-0 mt-1" />
                  <span>Revisão dos textos do site</span>
                </li>
              </ul>

              <button className="w-full bg-blue-900 text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition">
                Escolher Plano Básico
              </button>
            </div>

            {/* Plano Premium */}
            <div className={`p-8 rounded-lg border-2 transition relative ${activeTab === 'premium' ? 'border-blue-900 bg-blue-50' : 'border-gray-200'}`}>
              <div className="absolute top-0 right-0 bg-blue-900 text-white px-4 py-1 rounded-bl-lg text-sm font-bold">
                MAIS POPULAR
              </div>
              
              <h3 className="text-2xl font-bold mb-2">Plano Premium</h3>
              <p className="text-gray-600 mb-6">Para clínicas que querem crescer rápido</p>
              
              <div className="mb-8">
                <span className="text-4xl font-bold text-blue-900">R$ 1.500</span>
                <span className="text-gray-600"> a R$ 3.000/mês</span>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-green-500 flex-shrink-0 mt-1" />
                  <span>20 legendas para Instagram</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-green-500 flex-shrink-0 mt-1" />
                  <span>8 roteiros para Reels</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-green-500 flex-shrink-0 mt-1" />
                  <span>2 artigos para blog</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-green-500 flex-shrink-0 mt-1" />
                  <span>Planejamento editorial mensal</span>
                </li>
              </ul>

              <button className="w-full bg-blue-900 text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition">
                Escolher Plano Premium
              </button>
            </div>
          </div>

          <p className="text-center text-gray-600 mt-8">
            💬 Preço customizável conforme necessidades específicas. Agende uma consulta para discutir.
          </p>
        </div>
      </section>

      {/* FAQ - Objeções */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Perguntas Frequentes</h2>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3">Quanto tempo leva para ver resultados?</h3>
              <p className="text-gray-700">
                Geralmente, clientes começam a ver aumento em engajamento em 2-3 semanas. Conversões em agendamentos aumentam significativamente em 4-6 semanas quando o copy está bem estruturado.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3">Posso ajustar os planos?</h3>
              <p className="text-gray-700">
                Sim! Os planos são flexíveis. Se você precisa de mais legendas, menos roteiros ou algo customizado, fazemos um plano sob medida. Agende uma consulta para discutir.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3">Como funciona o processo de trabalho?</h3>
              <p className="text-gray-700">
                1) Entrevista para entender sua clínica e pacientes, 2) Criação do copy/estratégia, 3) Você revisa e solicita ajustes, 4) Entrega final. Tudo via email e reuniões virtuais.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3">Preciso ter meu próprio site/redes sociais?</h3>
              <p className="text-gray-700">
                Ideal ter, mas não é obrigatório. Se você não tem, podemos criar um plano para estruturar isso. O copy funciona em qualquer lugar — site, Instagram, WhatsApp, email.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3">Como cancelo se não funcionar?</h3>
              <p className="text-gray-700">
                Oferecemos 30 dias de garantia. Se em 30 dias você não ver valor, você pode cancelar sem problema. Sem perguntas, sem burocracia. Mas até agora nenhum cliente cancelou!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-6 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Pronto para Transformar Sua Clínica?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Agende uma consulta gratuita. Vamos discutir exatamente o que sua clínica precisa.
          </p>
          
          <button className="bg-white text-blue-900 px-10 py-4 rounded-lg text-lg font-bold hover:bg-gray-100 transition inline-flex items-center gap-2">
            Agendar Consulta Gratuita <ArrowRight size={20} />
          </button>

          <p className="text-blue-100 mt-6">
            ⏱️ Consulta de 30 minutos · Sem compromisso · 100% prático
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-white mb-4">Guilherme D</h4>
              <p>Medical Copywriter especializado em clínicas privadas</p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Serviços</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">Copywriting Médico</a></li>
                <li><a href="#" className="hover:text-white">Estratégia Editorial</a></li>
                <li><a href="#" className="hover:text-white">Roteiros de Vídeo</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Contato</h4>
              <p className="text-sm">Termasdosmaia.Brazil</p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Social</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">Instagram</a></li>
                <li><a href="#" className="hover:text-white">LinkedIn</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; 2024 Guilherme D - Medical Copywriter. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
      `}</style>
    </div>
  );
}
