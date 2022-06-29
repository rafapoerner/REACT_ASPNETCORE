using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ProAtividade.API.models;

namespace ProAtividade.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AtividadadeController : ControllerBase
    {
        public IEnumerable<Atividade> Atividades = new List<Atividade>() {
            new Atividade(1),
            new Atividade(2),
            new Atividade(3)
        };

        [HttpGet]
        public IEnumerable<Atividade> Get()
        {
            return Atividades;
        }

        [HttpGet("{id}")]
        public Atividade Get(int id)
        {
            return Atividades.FirstOrDefault(ativ => ativ.Id == id);
        }

        [HttpPost]
        public IEnumerable<Atividade> Post(Atividade atividade)
        {
            return Atividades.Append<Atividade>(atividade);
        }

        [HttpPut("{id}")]
        public Atividade Put(int id, Atividade atividade)
        {
            atividade.Id = atividade.Id + 100;
            return atividade;
        }

        [HttpDelete("{id}")]
        public string Delete(int id)
        {
            return $"Meu primeiro método DELETE com parâmetro {id}";
        }
    }
}