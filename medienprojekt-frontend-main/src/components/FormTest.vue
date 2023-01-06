<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Dauer des Praktikums:"
        label-for="input-1"
        description="in Wochen (wip)"
      >
        <b-form-input
          id="input-1"
          v-model="form.duration"
          placeholder="Bitte Dauer eingeben"
          required
        />
      </b-form-group>

      <b-form-group
        id="input-group-2"
        label="Vor-/Berufspraktikum:"
        label-for="input-2"
      >
        <b-form-select
          id="input-2"
          v-model="form.vorBerufs"
          :options="vorBerufOptions"
          required
        />
      </b-form-group>

      <b-form-group id="input-group-3" label="Studiengang" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="form.studiengang"
          placeholder="z.B. Medieninformatik :)"
          required
        />
      </b-form-group>

      <b-form-group id="input-group-4" label="Kommentar:" label-for="input-4">
        <b-form-input
          id="input-4"
          v-model="form.textkommentar"
          placeholder="Wenn dir was einfällt..."
        />
      </b-form-group>

      <b-form-group id="input-group-5" label="Bewertung" label-for="input-5">
        <b-form-select
          id="input-5"
          v-model="form.bewertung"
          :options="bewertungOptions"
          required
        />
      </b-form-group>

      <b-form-group id="input-group-6" label="Nepotismus" label-for="input-6">
        <b-form-select
          id="input-6"
          v-model="form.beziehungen"
          :options="bewertungOptions"
          required
        />
      </b-form-group>

      <b-form-group
        id="input-group-7"
        label="Bist du rich?"
        label-for="input-7"
      >
        <b-form-select
          id="input-7"
          v-model="form.family"
          :options="jaNeinOptions"
        />
      </b-form-group>

      <b-form-group id="input-group-8" label="Entgelt" label-for="input-8">
        <b-form-input
          id="input-8"
          v-model="form.entgelt"
          placeholder="1 hunnit"
          required
        />
      </b-form-group>

      <b-form-group
        id="input-group-9"
        label="Wurdest du gezwungen?"
        label-for="input-9"
      >
        <b-form-select
          id="input-9"
          v-model="form.pflichtFreiwillig"
          :options="pflichtOptions"
        />
      </b-form-group>

      <b-form-group
        id="input-group-10"
        label="Abteilung des Unternehmens"
        label-for="input-10"
      >
        <b-form-input
          id="input-19"
          v-model="form.abteilung"
          placeholder="z.b. Personalabteilung"
          required
        />
      </b-form-group>

      <b-button type="submit" variant="primary">
        Submit
      </b-button>
      <b-button type="reset" variant="danger">
        Reset
      </b-button>
    </b-form>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        duration: null,
        vorBerufs: null,
        studiengang: '',
        textkommentar: '',
        bewertung: null,
        beziehungen: null,
        family: null,
        entgelt: null,
        pflichtFreiwillig: null,
        abteilung: '',
      },
      show: true,
      vorBerufOptions: [
        {
          text: 'Bitte wählen',
          value: null,
        },
        'Vorpraktikum',
        'Berufspraktikum',
      ],
      bewertungOptions: [
        {
          text: 'Bitte wählen',
          value: null,
        },
        1,
        2,
        3,
        4,
        5,
      ],
      jaNeinOptions: [
        {
          text: 'Bitte wählen',
          value: null,
        },
        'Ja',
        'Nein',
      ],
      pflichtOptions: [
        {
          text: 'Bitte wählen',
          value: null,
        },
        'Pflicht',
        'Freiwillig',
      ],
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      console.log(this.form);
      // alert(JSON.stringify(this.form));
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.form),
      };
      fetch('/api/form', requestOptions)
        .then(response => response.json())
        .then(data => console.log(data));
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.duration = null;
      this.form.vorBerufs = null;
      this.form.studiengang = null;
      this.form.textkommentar = null;
      this.form.bewertung = null;
      this.form.beziehungen = null;
      this.form.family = null;
      this.form.entgelt = null;
      this.form.pflichtFreiwillig = null;
      this.form.abteilung = null;
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>
