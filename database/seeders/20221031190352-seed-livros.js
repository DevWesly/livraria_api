'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    let livros = [{
      id:1,
      titulo:"A ilha perdida",
      total_paginas:600,
      autor: "james bill",
      ano_lancamento:"2002",
      estoque:40,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },{
      id:2,
      titulo:"pirulito",
      total_paginas:80,
      autor: "james bill",
      ano_lancamento:"1782",
      estoque:40,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },{
      id:3,
      titulo:"O livro",
      total_paginas:10,
      autor: "Desconhecido",
      ano_lancamento:"2004",
      estoque:400,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },{
      id:4,
      titulo:"Catibirimbau",
      total_paginas:6,
      autor: "LUIa",
      ano_lancamento:"2002",
      estoque:10,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },{
      id:5,
      titulo:"Tudo",
      total_paginas:122,
      autor: "Lez",
      ano_lancamento:"2002",
      estoque:40,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },{
      id:6,
      titulo:"A espera",
      total_paginas:87,
      autor: "Kadu",
      ano_lancamento:"2002",
      estoque:894,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },{
      id:7,
      titulo:"A metamorfose",
      total_paginas:120,
      autor: "juliana sales",
      ano_lancamento:"2020",
      estoque:400,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },{
      id:8,
      titulo:"A meia",
      total_paginas:60,
      autor: "jouaquo",
      ano_lancamento:"2072",
      estoque:18,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
  ]

    await queryInterface.bulkInsert('livros',livros, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('livros', null, {});
  }
};