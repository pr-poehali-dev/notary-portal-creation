import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Scale" size={32} className="text-blue-600" />
              <h1 className="text-2xl font-heading font-bold text-gray-900">
                Нотариус
              </h1>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="#about"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                О нас
              </a>
              <a
                href="#services"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Услуги
              </a>
              <a
                href="#pricing"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Цены
              </a>
              <a
                href="#contact"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Контакты
              </a>
            </nav>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Icon name="User" size={16} className="mr-2" />
              Личный кабинет
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-transparent"></div>
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <Badge className="mb-6 bg-blue-100 text-blue-800 border-blue-200">
                Лицензированная нотариальная контора
              </Badge>
              <h1 className="text-5xl font-heading font-bold text-gray-900 mb-6 leading-tight">
                Надежные нотариальные услуги с цифровым личным кабинетом
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Профессиональные нотариальные услуги с удобным хранением документов 
                в персональном цифровом кабинете. Полная конфиденциальность и безопасность.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Icon name="FileText" size={20} className="mr-2" />
                  Записаться на прием
                </Button>
                <Button size="lg" variant="outline">
                  <Icon name="Play" size={20} className="mr-2" />
                  Посмотреть услуги
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <img 
                src="/img/d87f5a26-b63d-4d44-9e2d-12640809a392.jpg" 
                alt="Нотариальный офис" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
            <Badge className="mb-6 bg-blue-100 text-blue-800 border-blue-200">
              Лицензированная нотариальная контора
            </Badge>
            <h1 className="text-5xl font-heading font-bold text-gray-900 mb-6 leading-tight">
              Надежные нотариальные услуги с цифровым личным кабинетом
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Профессиональные нотариальные услуги с удобным хранением
              документов в персональном цифровом кабинете. Полная
              конфиденциальность и безопасность.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Icon name="FileText" size={20} className="mr-2" />
                Записаться на прием
              </Button>
              <Button size="lg" variant="outline">
                <Icon name="Play" size={20} className="mr-2" />
                Посмотреть услуги
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">
                О нашей компании
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Более 15 лет обеспечиваем юридическую защиту ваших интересов
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-gray-100 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <Icon
                    name="Shield"
                    size={48}
                    className="text-blue-600 mx-auto mb-4"
                  />
                  <CardTitle className="text-xl">Безопасность</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">
                    Все документы защищены современными системами шифрования
                  </p>
                </CardContent>
              </Card>

              <Card className="border-gray-100 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <Icon
                    name="Award"
                    size={48}
                    className="text-blue-600 mx-auto mb-4"
                  />
                  <CardTitle className="text-xl">Опыт</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">
                    Более 10,000 успешно оформленных документов
                  </p>
                </CardContent>
              </Card>

              <Card className="border-gray-100 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <Icon
                    name="Clock"
                    size={48}
                    className="text-blue-600 mx-auto mb-4"
                  />
                  <CardTitle className="text-xl">Скорость</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">
                    Быстрое оформление документов в удобное время
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">
                Наши услуги
              </h2>
              <p className="text-xl text-gray-600">
                Полный спектр нотариальных услуг для физических и юридических
                лиц
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: "FileText",
                  title: "Заверение документов",
                  desc: "Нотариальное заверение копий и переводов",
                },
                {
                  icon: "Home",
                  title: "Сделки с недвижимостью",
                  desc: "Оформление купли-продажи, дарения, наследства",
                },
                {
                  icon: "Users",
                  title: "Доверенности",
                  desc: "Оформление различных видов доверенностей",
                },
                {
                  icon: "Heart",
                  title: "Брачные договоры",
                  desc: "Составление и заверение брачных контрактов",
                },
                {
                  icon: "Building",
                  title: "Корпоративные услуги",
                  desc: "Услуги для юридических лиц и ИП",
                },
                {
                  icon: "FileSignature",
                  title: "Наследственные дела",
                  desc: "Ведение наследственных дел под ключ",
                },
              ].map((service, index) => (
                <Card
                  key={index}
                  className="border-gray-200 hover:shadow-lg transition-shadow"
                >
                  <CardHeader>
                    <Icon
                      name={service.icon}
                      size={40}
                      className="text-blue-600 mb-3"
                    />
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{service.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">
                Цены на услуги
              </h2>
              <p className="text-xl text-gray-600">
                Прозрачные цены без скрытых комиссий
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-gray-200">
                <CardHeader>
                  <CardTitle className="text-xl">Популярные услуги</CardTitle>
                  <CardDescription>
                    Основные нотариальные действия
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { service: "Заверение копии документа", price: "200 ₽" },
                    { service: "Доверенность на автомобиль", price: "1 500 ₽" },
                    { service: "Заверение перевода", price: "500 ₽" },
                    { service: "Брачный договор", price: "5 000 ₽" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center"
                    >
                      <span className="text-gray-700">{item.service}</span>
                      <span className="font-semibold text-blue-600">
                        {item.price}
                      </span>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="border-gray-200">
                <CardHeader>
                  <CardTitle className="text-xl">
                    Сделки с недвижимостью
                  </CardTitle>
                  <CardDescription>Оформление недвижимости</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { service: "Договор купли-продажи", price: "от 8 000 ₽" },
                    { service: "Договор дарения", price: "от 5 000 ₽" },
                    { service: "Наследственное дело", price: "от 15 000 ₽" },
                    { service: "Ипотечные документы", price: "от 12 000 ₽" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center"
                    >
                      <span className="text-gray-700">{item.service}</span>
                      <span className="font-semibold text-blue-600">
                        {item.price}
                      </span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Cabinet Preview */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">
                Личный кабинет
              </h2>
              <p className="text-xl text-gray-600">
                Удобное хранение всех ваших документов в цифровом формате
              </p>
            </div>

            <Card className="border-gray-200 overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                <CardTitle className="text-2xl flex items-center">
                  <Icon name="User" size={24} className="mr-3" />
                  Личный кабинет - Иванов И.И.
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center">
                      <Icon
                        name="FolderOpen"
                        size={20}
                        className="mr-2 text-blue-600"
                      />
                      Мои документы
                    </h3>
                    <div className="space-y-3">
                      {[
                        {
                          name: "Договор купли-продажи №123",
                          date: "15.12.2024",
                          type: "PDF",
                        },
                        {
                          name: "Доверенность на автомобиль",
                          date: "10.12.2024",
                          type: "PDF",
                        },
                        {
                          name: "Брачный договор",
                          date: "05.12.2024",
                          type: "PDF",
                        },
                      ].map((doc, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                        >
                          <div className="flex items-center">
                            <Icon
                              name="FileText"
                              size={16}
                              className="mr-2 text-blue-600"
                            />
                            <div>
                              <p className="font-medium text-sm">{doc.name}</p>
                              <p className="text-xs text-gray-500">
                                {doc.date}
                              </p>
                            </div>
                          </div>
                          <Badge variant="secondary" className="text-xs">
                            {doc.type}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center">
                      <Icon
                        name="Calendar"
                        size={20}
                        className="mr-2 text-blue-600"
                      />
                      Активные дела
                    </h3>
                    <div className="space-y-3">
                      {[
                        {
                          title: "Наследственное дело",
                          status: "В процессе",
                          date: "20.12.2024",
                        },
                        {
                          title: "Оформление доверенности",
                          status: "Готово",
                          date: "18.12.2024",
                        },
                      ].map((case_item, index) => (
                        <div key={index} className="p-3 bg-gray-50 rounded-lg">
                          <div className="flex items-center justify-between mb-2">
                            <p className="font-medium text-sm">
                              {case_item.title}
                            </p>
                            <Badge
                              className={
                                case_item.status === "Готово"
                                  ? "bg-green-100 text-green-800"
                                  : "bg-yellow-100 text-yellow-800"
                              }
                            >
                              {case_item.status}
                            </Badge>
                          </div>
                          <p className="text-xs text-gray-500">
                            Дата: {case_item.date}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <Separator className="my-6" />

                <div className="text-center">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                    <Icon name="LogIn" size={20} className="mr-2" />
                    Войти в личный кабинет
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">
                Контакты
              </h2>
              <p className="text-xl text-gray-600">
                Свяжитесь с нами для консультации
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-semibold mb-6">
                  Контактная информация
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Icon
                      name="MapPin"
                      size={20}
                      className="text-blue-600 mr-3"
                    />
                    <span className="text-gray-700">
                      г. Москва, ул. Пушкина, д. 10, офис 301
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Icon
                      name="Phone"
                      size={20}
                      className="text-blue-600 mr-3"
                    />
                    <span className="text-gray-700">+7 (495) 123-45-67</span>
                  </div>
                  <div className="flex items-center">
                    <Icon
                      name="Mail"
                      size={20}
                      className="text-blue-600 mr-3"
                    />
                    <span className="text-gray-700">info@notary-office.ru</span>
                  </div>
                  <div className="flex items-center">
                    <Icon
                      name="Clock"
                      size={20}
                      className="text-blue-600 mr-3"
                    />
                    <span className="text-gray-700">
                      Пн-Пт: 9:00-18:00, Сб: 10:00-15:00
                    </span>
                  </div>
                </div>
              </div>

              <Card className="border-gray-200">
                <CardHeader>
                  <CardTitle>Записаться на прием</CardTitle>
                  <CardDescription>
                    Оставьте заявку, и мы свяжемся с вами
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Имя
                      </label>
                      <input
                        type="text"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Ваше имя"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Телефон
                      </label>
                      <input
                        type="tel"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="+7 (___) ___-__-__"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Услуга
                      </label>
                      <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                        <option>Выберите услугу</option>
                        <option>Заверение документов</option>
                        <option>Сделки с недвижимостью</option>
                        <option>Доверенности</option>
                        <option>Другое</option>
                      </select>
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700"
                    >
                      Записаться
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <Icon name="Scale" size={24} className="text-blue-400" />
                  <h3 className="text-xl font-bold">Нотариус</h3>
                </div>
                <p className="text-gray-400">
                  Профессиональные нотариальные услуги с 2009 года
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Услуги</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>Заверение документов</li>
                  <li>Недвижимость</li>
                  <li>Доверенности</li>
                  <li>Наследство</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Информация</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>О компании</li>
                  <li>Цены</li>
                  <li>Контакты</li>
                  <li>Документы</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Контакты</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>+7 (495) 123-45-67</li>
                  <li>info@notary-office.ru</li>
                  <li>г. Москва, ул. Пушкина, 10</li>
                </ul>
              </div>
            </div>
            <Separator className="my-8 bg-gray-800" />
            <div className="text-center text-gray-400">
              <p>&copy; 2024 Нотариальная контора. Все права защищены.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;