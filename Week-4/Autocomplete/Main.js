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
