import { Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav" bg="tomato">
        Nav
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" bg="papayawhip">
          Aside
        </GridItem>
      </Show>
      <GridItem area="main" bg="lightgreen">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
