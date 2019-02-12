module.exports = {
  historia: function (personaje,lugar,edad) {
    if (edad>18 && edad < 80) {
      return `${personaje} vivia una triste. llevaba ${edad} y nunca salio de ${lugar}`
    } else if (edad >80){
            return `${personaje} de años ${edad} encontro sabiduría en ${lugar}`
    } else {
          return `Había ${personaje} que estaba en ${lugar} con ${edad} años`
    }
  }
}
