(() => {
  var e = {
      107: (e, t, r) => {
        e = r.nmd(e);
        const o = r(765);
        e.export = class {
          constructor() {
            this.error = document.querySelector("#error");
          }
          tampilkanErrorPenjumlahan = (e, t) => {
            const r = e.reduce(
              (e, r, n) => (o(t[n]) ? e + "" : e + `${r} itu bukan angka! `),
              "Silahkan masukkan angka yang benar: "
            );
            this.error.classList.remove("d-none"), (this.error.innerText = r);
          };
          sembunyikanError = () => this.error.classList.add("d-none");
        };
      },
      475: (e, t, r) => {
        e = r.nmd(e);
        const o = r(765),
          n = r(621);
        e.export = (e, t, r) => {
          e.sembunyikanError(),
            t.onClick(() => {
              e.sembunyikanError();
              const r = t.getInput(),
                a = n(...r);
              if (o(...a)) {
                const [e, r] = a;
                t.setResult(e, r);
              } else t.setResult(""), e.tampilkanErrorPenjumlahan(r, a);
            }),
            r.onClick(() => {
              fetch("https://candaan-api.vercel.app/api/text/random")
                .then((e) => e.json())
                .then((e) => {
                  r.setModal(e.data);
                });
            });
        };
      },
      351: (e, t, r) => {
        (e = r.nmd(e)).export = class {
          constructor() {
            (this.operand1 = document.querySelector("#operand1")),
              (this.operand2 = document.querySelector("#operand2")),
              (this.tombolTambah = document.querySelector("#tombol-tambah")),
              (this.hasil = document.querySelector("#hasil"));
          }
          getInput() {
            return [this.operand1.value, this.operand2.value];
          }
          setResult(e, t) {
            this.hasil.innerText = e + t;
          }
          onClick(e) {
            this.tombolTambah.addEventListener("click", e);
          }
        };
      },
      217: (e, t, r) => {
        (e = r.nmd(e)).export = class {
          constructor() {
            (this.tombolJokes = document.querySelector("#jokes-receh")),
              (this.modalBody = document.querySelector(".modal-body"));
          }
          setModal(e) {
            this.modalBody.innerHTML = e;
          }
          onClick(e) {
            this.tombolJokes.addEventListener("click", e);
          }
        };
      },
      765: (e) => {
        e.exports = (...e) => e.every((e) => "number" == typeof e && !isNaN(e));
      },
      621: (e) => {
        e.exports = (...e) => e.map((e) => parseInt(e));
      },
    },
    t = {};
  function r(o) {
    var n = t[o];
    if (void 0 !== n) return n.exports;
    var a = (t[o] = { id: o, loaded: !1, exports: {} });
    return e[o](a, a.exports, r), (a.loaded = !0), a.exports;
  }
  (r.nmd = (e) => ((e.paths = []), e.children || (e.children = []), e)),
    (() => {
      const e = r(475),
        t = r(107),
        o = r(351),
        n = r(217);
      e(new t(), new o(), new n());
    })();
})();
