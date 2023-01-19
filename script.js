const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)

const data = {
  Academia: ["01-01", "01-02", "01-03", "01-04", "01-05", "01-06"],
  Remedio: ["01-03"],
  Estudo: ["01-01", "01-02", "01-03"],
}

nlwSetup.setData(data)
nlwSetup.load()
