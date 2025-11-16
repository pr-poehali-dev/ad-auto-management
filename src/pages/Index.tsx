import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [chatMessages, setChatMessages] = useState([
    { role: "assistant", content: "Привет! Я AI-ассистент для управления рекламой. Просто опишите задачу обычными словами 👋" }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const suggestions = [
    "Настрой рекламу с бюджетом 50к",
    "Увеличь конверсию на 30%",
    "Снизь стоимость клика",
    "Найди новую аудиторию"
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatMessages, isTyping]);

  const getSmartResponse = (userMessage: string): string => {
    const msg = userMessage.toLowerCase();
    
    if (msg.includes("бюджет") || msg.includes("50") || msg.includes("100")) {
      return "Отлично! Я вижу ваш бюджет. Сейчас проанализирую:\n\n📊 Анализ конкурентов...\n🎯 Подбор целевой аудитории...\n💡 Оптимальная стратегия готова!\n\nРекомендую распределить:\n• 60% — поисковая реклама\n• 30% — таргетированная\n• 10% — ретаргетинг\n\nНачнём?";
    }
    
    if (msg.includes("конверс") || msg.includes("увелич")) {
      return "Понял задачу! Проверяю текущие кампании:\n\n✅ Нашёл 3 точки роста:\n1. A/B тест креативов (+15-20%)\n2. Уточнение аудитории (+10-15%)\n3. Оптимизация времени показа (+5-10%)\n\nВместе дадут ~30-45% роста. Применить?";
    }
    
    if (msg.includes("клик") || msg.includes("снизь") || msg.includes("дешевле")) {
      return "Анализирую стоимость кликов...\n\n📉 Нашёл способы снизить CPC:\n• Минус-слова: -25₽ за клик\n• Таргетинг по времени: -18₽\n• Корректировка ставок: -12₽\n\nИтого: снижение на ~40-50%. Внедряю?";
    }
    
    if (msg.includes("аудитор") || msg.includes("найди") || msg.includes("новую")) {
      return "Ищу похожие аудитории...\n\n🔍 Найдено 4 перспективных сегмента:\n1. Lookalike 1% — 180k чел. (высокая вероятность)\n2. Интересы смежных категорий — 340k чел.\n3. Поведенческий таргетинг — 95k чел.\n4. Ретаргетинг посетителей — 12k чел.\n\nЗапустить тест с бюджетом 10-15к?";
    }

    return "Понял! Анализирую вашу задачу...\n\n✨ Через пару секунд предложу оптимальное решение с конкретными цифрами и прогнозом результата.\n\nМожете уточнить детали или я сам подберу лучший вариант?";
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isTyping) return;
    
    const userMsg = inputValue;
    setInputValue("");
    setChatMessages(prev => [...prev, { role: "user", content: userMsg }]);
    
    setIsTyping(true);
    
    setTimeout(() => {
      const response = getSmartResponse(userMsg);
      setChatMessages(prev => [...prev, { role: "assistant", content: response }]);
      setIsTyping(false);
    }, 1200 + Math.random() * 800);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion);
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="bg-background/80 backdrop-blur-xl sticky top-0 z-50 border-b border-border/50">
        <div className="container mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary via-secondary to-accent rounded-2xl flex items-center justify-center shadow-lg">
              <Icon name="Sparkles" size={22} className="text-white" />
            </div>
            <span className="font-heading font-bold text-2xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">AdBot</span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Возможности</a>
            <a href="#cases" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Кейсы</a>
            <a href="#integrations" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Интеграции</a>
            <Button size="sm" className="bg-gradient-to-r from-primary via-secondary to-accent text-white shadow-lg hover:shadow-xl transition-all">
              Попробовать ✨
            </Button>
          </div>
        </div>
      </nav>

      <section className="container mx-auto px-6 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <Badge className="bg-gradient-to-r from-accent/20 to-primary/20 text-primary border-primary/30 text-sm px-4 py-1.5">✨ AI-автоматизация</Badge>
            <h1 className="font-heading text-5xl md:text-7xl font-black leading-tight">
              Реклама на <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">автопилоте</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Просто скажи что нужно — AI всё настроит, оптимизирует и масштабирует. 
              Никаких сложных панелей 🚀
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-gradient-to-r from-primary via-secondary to-accent text-white shadow-2xl hover:shadow-accent/50 transition-all text-lg px-8 py-6 rounded-2xl">
                <Icon name="Rocket" size={20} className="mr-2" />
                Запустить бесплатно
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 rounded-2xl border-2 hover:bg-muted/50">
                <Icon name="Play" size={20} className="mr-2" />
                Как работает
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

          <Card className="shadow-2xl border-2 border-primary/20 animate-scale-in bg-gradient-to-br from-card to-muted/30 backdrop-blur">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6 pb-5 border-b border-border/50">
                <div className="w-4 h-4 rounded-full bg-gradient-to-r from-red-400 to-red-500 shadow-lg"></div>
                <div className="w-4 h-4 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 shadow-lg"></div>
                <div className="w-4 h-4 rounded-full bg-gradient-to-r from-green-400 to-green-500 shadow-lg"></div>
                <span className="ml-auto text-sm font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">✨ AI Ассистент</span>
              </div>
              
              <div className="space-y-4 h-80 overflow-y-auto mb-4 px-2">
                {chatMessages.map((msg, idx) => (
                  <div key={idx} className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : ''} animate-fade-in`}>
                    {msg.role === 'assistant' && (
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                        <Icon name="Bot" size={16} className="text-white" />
                      </div>
                    )}
                    <div className={`max-w-[80%] rounded-3xl px-5 py-4 shadow-md ${
                      msg.role === 'user' 
                        ? 'bg-gradient-to-br from-primary via-secondary to-accent text-white' 
                        : 'bg-gradient-to-br from-card to-muted border border-border/50'
                    }`}>
                      <p className="text-sm whitespace-pre-line leading-relaxed">{msg.content}</p>
                    </div>
                  </div>
                ))}
                {isTyping && (
                  <div className="flex gap-3 animate-fade-in">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Icon name="Bot" size={16} className="text-white" />
                    </div>
                    <div className="bg-gradient-to-br from-card to-muted rounded-3xl px-5 py-4 shadow-md border border-border/50">
                      <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 bg-gradient-to-r from-primary to-secondary rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                        <div className="w-2.5 h-2.5 bg-gradient-to-r from-secondary to-accent rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                        <div className="w-2.5 h-2.5 bg-gradient-to-r from-accent to-primary rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              <div className="space-y-3">
                {chatMessages.length === 1 && (
                  <div className="flex flex-wrap gap-2">
                    {suggestions.map((suggestion, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSuggestionClick(suggestion)}
                        className="text-xs px-4 py-2 rounded-full bg-gradient-to-r from-muted to-muted/50 hover:from-primary/10 hover:to-secondary/10 transition-all border border-border/50 hover:border-primary/30 shadow-sm hover:shadow-md"
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                )}
                <div className="flex gap-2">
                  <Input 
                    placeholder="Напиши что нужно сделать..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    className="flex-1 bg-muted/50 border-border/50 focus:border-primary/50 rounded-2xl px-5 py-3 text-base"
                    disabled={isTyping}
                  />
                  <Button 
                    onClick={handleSendMessage} 
                    className="bg-gradient-to-r from-primary via-secondary to-accent text-white shadow-lg hover:shadow-xl transition-all rounded-2xl px-6"
                    disabled={isTyping || !inputValue.trim()}
                  >
                    <Icon name="Send" size={20} />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="features" className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 animate-slide-up">
            <Badge className="mb-5 bg-gradient-to-r from-primary/20 to-secondary/20 text-primary border-primary/30 text-sm px-4 py-1.5">✨ Возможности</Badge>
            <h2 className="font-heading text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">Что умеет AI</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Просто скажи что нужно — и всё заработает самостоятельно
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
              <Card key={idx} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-border/50 hover:border-primary/30 bg-gradient-to-br from-card to-muted/20 backdrop-blur rounded-3xl overflow-hidden">
                <CardContent className="p-8">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all shadow-xl`}>
                    <Icon name={feature.icon as any} size={28} className="text-white" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="cases" className="py-24 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <Badge className="mb-5 bg-gradient-to-r from-secondary/20 to-accent/20 text-secondary border-secondary/30 text-sm px-4 py-1.5">📈 Кейсы</Badge>
            <h2 className="font-heading text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">Реальные результаты</h2>
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
              <Card key={idx} className="border-2 border-border/50 hover:border-primary/30 hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-card to-muted/20 backdrop-blur rounded-3xl overflow-hidden group">
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="font-heading text-2xl font-bold group-hover:text-primary transition-colors">{caseItem.company}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{caseItem.industry}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl p-4 shadow-sm">
                      <div className="text-3xl font-black bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">{caseItem.roas}</div>
                      <div className="text-xs font-medium text-muted-foreground mt-1">ROAS</div>
                    </div>
                    <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-2xl p-4 shadow-sm">
                      <div className="text-3xl font-black bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">{caseItem.cpa}</div>
                      <div className="text-xs font-medium text-muted-foreground mt-1">CPA</div>
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">{caseItem.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="integrations" className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <Badge className="mb-5 bg-gradient-to-r from-accent/20 to-primary/20 text-accent border-accent/30 text-sm px-4 py-1.5">🔌 Интеграции</Badge>
            <h2 className="font-heading text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">Все площадки в одном месте</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Подключай за клик и управляй всем через чат
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
              <Card key={idx} className="group hover:border-primary/50 transition-all duration-300 cursor-pointer bg-gradient-to-br from-card to-muted/20 backdrop-blur rounded-2xl hover:shadow-xl hover:-translate-y-1">
                <CardContent className="p-6 flex flex-col items-center text-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-muted to-muted/50 group-hover:from-primary/20 group-hover:to-secondary/20 flex items-center justify-center transition-all group-hover:scale-110 shadow-md">
                    <Icon name={platform.icon as any} size={26} className="text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <span className="font-semibold text-sm group-hover:text-primary transition-colors">{platform.name}</span>
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

      <section className="py-32 bg-gradient-to-br from-primary via-secondary to-accent relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
        <div className="container mx-auto px-6 text-center text-white relative z-10">
          <h2 className="font-heading text-5xl md:text-7xl font-black mb-8 leading-tight">
            Готов увеличить ROAS в 3 раза?
          </h2>
          <p className="text-xl md:text-2xl mb-12 opacity-95 max-w-3xl mx-auto leading-relaxed">
            2000+ компаний уже запустили рекламу на автопилоте 🚀
          </p>
          <Button size="lg" className="bg-white text-primary hover:bg-white/95 shadow-2xl text-lg px-10 py-7 rounded-2xl hover:scale-105 transition-all">
            <Icon name="Zap" size={24} className="mr-2" />
            Запустить бесплатно
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