import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [chatMessages, setChatMessages] = useState([
    { role: "assistant", content: "Привет! Я помогу настроить вашу рекламную кампанию. Какой у вас бюджет и цель?" }
  ]);
  const [inputValue, setInputValue] = useState("");

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;
    
    setChatMessages([...chatMessages, 
      { role: "user", content: inputValue },
      { role: "assistant", content: "Отлично! Я проанализирую данные и предложу оптимальную стратегию через несколько секунд..." }
    ]);
    setInputValue("");
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <Icon name="Zap" size={20} className="text-white" />
            </div>
            <span className="font-heading font-bold text-xl">AdBot AI</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">Возможности</a>
            <a href="#cases" className="text-sm font-medium hover:text-primary transition-colors">Кейсы</a>
            <a href="#integrations" className="text-sm font-medium hover:text-primary transition-colors">Интеграции</a>
            <a href="#api" className="text-sm font-medium hover:text-primary transition-colors">API</a>
            <Button size="sm" className="bg-gradient-to-r from-primary to-accent">
              Начать бесплатно
            </Button>
          </div>
        </div>
      </nav>

      <section className="container mx-auto px-6 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <Badge className="bg-accent/10 text-accent border-accent/20">AI-powered автоматизация</Badge>
            <h1 className="font-heading text-5xl md:text-6xl font-bold leading-tight">
              Управляй рекламой через <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">диалог</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Настраивай, оптимизируй и масштабируй рекламные кампании с помощью AI-ассистента. 
              Без сложных интерфейсов — просто опиши задачу.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-gradient-to-r from-primary to-accent">
                <Icon name="Sparkles" size={18} className="mr-2" />
                Попробовать демо
              </Button>
              <Button size="lg" variant="outline">
                <Icon name="Play" size={18} className="mr-2" />
                Смотреть видео
              </Button>
            </div>
            <div className="flex items-center gap-8 pt-4">
              <div>
                <div className="font-heading text-3xl font-bold text-primary">3.2x</div>
                <div className="text-sm text-muted-foreground">Рост ROAS</div>
              </div>
              <div>
                <div className="font-heading text-3xl font-bold text-secondary">-67%</div>
                <div className="text-sm text-muted-foreground">Время на настройку</div>
              </div>
              <div>
                <div className="font-heading text-3xl font-bold text-accent">24/7</div>
                <div className="text-sm text-muted-foreground">Мониторинг</div>
              </div>
            </div>
          </div>

          <Card className="shadow-2xl border-2 animate-scale-in">
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-4 pb-4 border-b">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-auto text-sm font-medium">AI Ассистент</span>
              </div>
              
              <div className="space-y-4 h-80 overflow-y-auto mb-4">
                {chatMessages.map((msg, idx) => (
                  <div key={idx} className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : ''}`}>
                    {msg.role === 'assistant' && (
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                        <Icon name="Bot" size={16} className="text-white" />
                      </div>
                    )}
                    <div className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                      msg.role === 'user' 
                        ? 'bg-gradient-to-br from-primary to-accent text-white' 
                        : 'bg-muted'
                    }`}>
                      <p className="text-sm">{msg.content}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex gap-2">
                <Input 
                  placeholder="Напишите вашу задачу..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  className="flex-1"
                />
                <Button onClick={handleSendMessage} className="bg-gradient-to-r from-primary to-accent">
                  <Icon name="Send" size={18} />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="features" className="bg-muted/30 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-slide-up">
            <Badge className="mb-4">Возможности</Badge>
            <h2 className="font-heading text-4xl font-bold mb-4">Всё для эффективной рекламы</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              От анализа аудитории до автоматической оптимизации — AI делает всю работу за вас
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "Target",
                title: "Умный таргетинг",
                description: "AI анализирует поведение аудитории и автоматически настраивает таргетинг для максимальной конверсии",
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: "TrendingUp",
                title: "Автооптимизация",
                description: "Непрерывная оптимизация ставок и креативов на основе реальных данных о производительности",
                color: "from-purple-500 to-pink-500"
              },
              {
                icon: "BarChart3",
                title: "Аналитика в реальном времени",
                description: "Детальные отчеты и прогнозы производительности с рекомендациями по улучшению",
                color: "from-orange-500 to-red-500"
              },
              {
                icon: "Sparkles",
                title: "Генерация креативов",
                description: "AI создает и тестирует рекламные креативы, находя лучшие варианты для вашей аудитории",
                color: "from-green-500 to-emerald-500"
              },
              {
                icon: "DollarSign",
                title: "Контроль бюджета",
                description: "Умное распределение бюджета между кампаниями с учетом эффективности и сезонности",
                color: "from-yellow-500 to-amber-500"
              },
              {
                icon: "Shield",
                title: "Защита от фрода",
                description: "Автоматическое обнаружение и блокировка мошеннического трафика и ботов",
                color: "from-indigo-500 to-violet-500"
              }
            ].map((feature, idx) => (
              <Card key={idx} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2">
                <CardContent className="p-6">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon name={feature.icon as any} size={24} className="text-white" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="cases" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4">Кейсы</Badge>
            <h2 className="font-heading text-4xl font-bold mb-4">Реальные результаты</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                company: "TechShop",
                industry: "E-commerce",
                roas: "+385%",
                cpa: "-62%",
                description: "Интернет-магазин электроники увеличил продажи в 4 раза за 2 месяца"
              },
              {
                company: "FitLife",
                industry: "Фитнес",
                roas: "+290%",
                cpa: "-51%",
                description: "Сеть фитнес-клубов снизила стоимость лида при росте количества записей"
              },
              {
                company: "EduPro",
                industry: "Образование",
                roas: "+420%",
                cpa: "-73%",
                description: "Онлайн-школа увеличила количество регистраций при меньшем бюджете"
              }
            ].map((caseItem, idx) => (
              <Card key={idx} className="border-2 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-heading text-xl font-bold">{caseItem.company}</h3>
                      <p className="text-sm text-muted-foreground">{caseItem.industry}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-green-50 dark:bg-green-950/20 rounded-lg p-3">
                      <div className="text-2xl font-bold text-green-600">{caseItem.roas}</div>
                      <div className="text-xs text-muted-foreground">ROAS</div>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950/20 rounded-lg p-3">
                      <div className="text-2xl font-bold text-blue-600">{caseItem.cpa}</div>
                      <div className="text-xs text-muted-foreground">CPA</div>
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground">{caseItem.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="integrations" className="bg-muted/30 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4">Интеграции</Badge>
            <h2 className="font-heading text-4xl font-bold mb-4">Работаем со всеми платформами</h2>
            <p className="text-lg text-muted-foreground">
              Подключайте рекламные площадки в один клик
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Google Ads", icon: "Search" },
              { name: "Facebook Ads", icon: "Share2" },
              { name: "Яндекс.Директ", icon: "Globe" },
              { name: "VK Реклама", icon: "MessageCircle" },
              { name: "TikTok Ads", icon: "Music" },
              { name: "MyTarget", icon: "Target" },
              { name: "Telegram Ads", icon: "Send" },
              { name: "Instagram", icon: "Camera" }
            ].map((platform, idx) => (
              <Card key={idx} className="group hover:border-primary transition-all cursor-pointer">
                <CardContent className="p-6 flex flex-col items-center text-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-muted group-hover:bg-primary/10 flex items-center justify-center transition-colors">
                    <Icon name={platform.icon as any} size={24} className="text-muted-foreground group-hover:text-primary" />
                  </div>
                  <span className="font-medium text-sm">{platform.name}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="api" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4">API</Badge>
            <h2 className="font-heading text-4xl font-bold mb-4">Мощное API для разработчиков</h2>
            <p className="text-lg text-muted-foreground">
              Интегрируйте AI-автоматизацию в ваши продукты
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-2">
              <CardContent className="p-0">
                <div className="bg-muted/50 px-6 py-4 border-b flex items-center gap-2">
                  <Icon name="Code" size={20} className="text-primary" />
                  <span className="font-mono text-sm font-medium">REST API</span>
                  <Badge variant="outline" className="ml-auto">v2.0</Badge>
                </div>
                <div className="p-6">
                  <pre className="bg-background rounded-lg p-4 overflow-x-auto border">
                    <code className="text-sm font-mono">
{`POST /api/v2/campaigns/optimize
Content-Type: application/json
Authorization: Bearer YOUR_API_KEY

{
  "campaign_id": "camp_123",
  "goals": {
    "target_roas": 3.5,
    "max_cpa": 500
  },
  "budget": {
    "daily": 10000,
    "total": 300000
  }
}`}
                    </code>
                  </pre>

                  <div className="mt-6 grid md:grid-cols-3 gap-4">
                    <div className="flex items-start gap-3">
                      <Icon name="Zap" size={20} className="text-yellow-500 mt-1" />
                      <div>
                        <div className="font-semibold text-sm">Быстро</div>
                        <div className="text-xs text-muted-foreground">Ответ за {'<'}100ms</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Lock" size={20} className="text-green-500 mt-1" />
                      <div>
                        <div className="font-semibold text-sm">Безопасно</div>
                        <div className="text-xs text-muted-foreground">OAuth 2.0 + API Keys</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="BookOpen" size={20} className="text-blue-500 mt-1" />
                      <div>
                        <div className="font-semibold text-sm">Документация</div>
                        <div className="text-xs text-muted-foreground">Примеры на 5 языках</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary via-accent to-secondary">
        <div className="container mx-auto px-6 text-center text-white">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            Готовы увеличить эффективность рекламы?
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Присоединяйтесь к 2000+ компаниям, которые уже автоматизировали свою рекламу с AdBot AI
          </p>
          <Button size="lg" className="bg-white text-primary hover:bg-white/90">
            <Icon name="Rocket" size={20} className="mr-2" />
            Начать бесплатный период
          </Button>
        </div>
      </section>

      <footer className="border-t py-12 bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                  <Icon name="Zap" size={20} className="text-white" />
                </div>
                <span className="font-heading font-bold text-xl">AdBot AI</span>
              </div>
              <p className="text-sm text-muted-foreground">
                AI-платформа для автоматизации управления рекламой
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Продукт</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Возможности</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Цены</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">API</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Интеграции</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Ресурсы</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Документация</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Блог</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Кейсы</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Поддержка</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Карьера</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Контакты</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Политика</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 AdBot AI. Все права защищены.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Twitter" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Linkedin" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Github" size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
