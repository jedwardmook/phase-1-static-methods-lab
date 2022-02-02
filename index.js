class Formatter {
  //add static methods here
  static capitalize(string) {
    return string[0].toUpperCase() + string.slice(1);
  }
  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-' ']+/g, "");
  }
  static titleize(string) {
    const nonCaps = ['the','a','an','but','of','and','for','at','by','from']
    let capString = string.split(' ').map(s => {
      if(!nonCaps.includes(s)){
        return Formatter.capitalize(s)
      } else {
        return s
      }
    }).join(' ')

    return Formatter.capitalize(capString)
  }
}