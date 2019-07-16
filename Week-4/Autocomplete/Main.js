<<<<<<< HEAD
var client = algoliasearch('latency', '6be0576ff61c053d5f9a3225e2a90f76');
var index = client.initIndex('contacts');

autocomplete('#contacts', { hint: false }, [
  {
    source: autocomplete.sources.hits(index, { hitsPerPage: 5 }),
    displayKey: 'name',
    templates: {
      suggestion: function(suggestion) {
        return suggestion._highlightResult.name.value;
      }
    }
  }
]);
=======
var client = algoliasearch('latency', '6be0576ff61c053d5f9a3225e2a90f76');
var index = client.initIndex('contacts');

autocomplete('#contacts', { hint: false }, [
  {
    source: autocomplete.sources.hits(index, { hitsPerPage: 5 }),
    displayKey: 'name',
    templates: {
      suggestion: function(suggestion) {
        return suggestion._highlightResult.name.value;
      }
    }
  }
]);
>>>>>>> ce437ab9f5a88b6727e69bdf3ebc9f0dfe33ef2b
