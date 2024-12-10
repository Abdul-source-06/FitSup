<template>
    <div class="about-us">
      <!-- Encapçalament -->
      <header class="header-section">
        <h1 class="text-5xl font-extrabold text-center fade-in">
          Sobre Nosaltres
        </h1>
        <p class="subtitle text-lg text-center mt-4 fade-in">
          Transformant la teva salut amb els millors suplements.
        </p>
      </header>
  
      <!-- Valors principals -->
      <section class="core-values mt-16">
        <h2 class="section-title text-3xl font-bold text-center slide-up">
          Els Nostres Valors
        </h2>
        <div class="values-grid mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="value-card hover:scale-105 transition">
            <img
              src="https://media.istockphoto.com/id/1213306848/es/vector/icono-de-calidad-etiqueta-de-cinta-de-verificaci%C3%B3n-certificada-sello-de-certificado.jpg?s=612x612&w=0&k=20&c=7C07P4669X8JzYLvRP1PqVtathN66n4b82_k2TC4Js4="
              alt="Qualitat"
              class="value-icon"
            />
            <h3 class="text-xl font-bold mt-4">Qualitat</h3>
            <p class="text-secondary">
              Oferim suplements d’alta qualitat per garantir els millors resultats.
            </p>
          </div>
          <div class="value-card hover:scale-105 transition">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSasqGdtZl1tsAybLchZkJ-YeLWIrL3hhrbnQ&s"
              alt="Proximitat"
              class="value-icon"
            />
            <h3 class="text-xl font-bold mt-4">Proximitat</h3>
            <p class="text-secondary">
              Som aquí per oferir un servei proper i personalitzat.
            </p>
          </div>
        </div>
      </section>
  
      <!-- Equip -->
      <section class="our-team mt-16">
        <h2 class="section-title text-3xl font-bold text-center fade-in">
          Coneix el Nostre Equip
        </h2>
        <div
          class="team-grid flex flex-row justify-center items-center gap-10 mt-8"
        >
          <div class="team-member hover:scale-110 transition slide-up">
            <img
              src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_640.png"
              alt="Abdul"
              class="rounded-full shadow-lg team-photo"
            />
            <h3 class="mt-4 text-lg font-bold text-center">Abdul</h3>
            <p class="text-secondary text-center">CEO i Fundador</p>
          </div>
          <div class="team-member hover:scale-110 transition slide-up">
            <img
              src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_640.png"
              alt="Joel"
              class="rounded-full shadow-lg team-photo"
            />
            <h3 class="mt-4 text-lg font-bold text-center">Joel</h3>
            <p class="text-secondary text-center">Cap de Producte</p>
          </div>
        </div>
      </section>
  
      <!-- Botó d'acció -->
      <section class="cta mt-16 text-center">
        <router-link to="/Home" class="btn-primary hover:scale-110 transition">
          Descobreix els Nostres Productes
        </router-link>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    name: "AboutUs",
  };
  </script>
  
  <style scoped>
  /* General styles */
  .about-us {
    padding: 20px;
  }
  
  /* Header */
  .header-section {
    background: linear-gradient(to right, #ff7f50, #ff6347); /* Cambié a un tono anaranjado */
    padding: 40px 20px;
    border-radius: 12px;
  }
  
  .subtitle {
    font-style: italic;
    color: #333333;
  }
  
  /* Animations */
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  
  @keyframes slideUp {
    from {
      transform: translateY(20px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
  
  .fade-in {
    animation: fadeIn 1.5s ease-in;
  }
  
  .slide-up {
    animation: slideUp 1s ease-in;
  }
  
  /* Core values section */
  .core-values {
    background: #ffcc80; /* Naranja claro para combinar */
    padding: 40px 20px;
    border-radius: 12px;
  }
  
  .value-card {
    background: #ffb74d; /* Naranja más oscuro */
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    text-align: center;
  }
  
  .value-icon {
    width: 80px;
    height: 80px;
    margin: auto;
  }
  
  .text-secondary {
    color: #333333;
  }
  
  /* Team section */
  .our-team {
    padding: 40px 20px;
    background: #ffcc80; /* Naranja claro */
    border-radius: 12px;
  }
  
  .team-photo {
    width: 120px;
    height: 120px;
    object-fit: cover;
    margin: auto;
  }
  
  /* Call-to-action */
  .btn-primary {
    background: #ffcc99;
    color: black;
    padding: 15px 30px;
    font-size: 1.2rem;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
  }
  
  .btn-primary:hover {
    background: #ffb380;
  }
  
  /* Responsiveness */
  @media (max-width: 768px) {
    .values-grid {
      grid-template-columns: 1fr;
    }
    .team-grid {
      flex-direction: column;
      gap: 20px;
    }
  }
  </style>
  