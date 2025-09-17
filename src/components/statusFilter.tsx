import { createListCollection, Portal, Select } from "@chakra-ui/react"




export function StatusFilter() {
  return(
  <Select.Root collection={frameworks} size="md" width="320px">
      <Select.HiddenSelect />
     {/*<Select.Label>Selecione o Status</Select.Label>*/}
      <Select.Control>
        <Select.Trigger>
          <Select.ValueText placeholder="Status do aluno" />
        </Select.Trigger>
        <Select.IndicatorGroup>
          <Select.Indicator />
        </Select.IndicatorGroup>
      </Select.Control>
      <Portal>
        <Select.Positioner>
          <Select.Content>
            {frameworks.items.map((framework) => (
              <Select.Item item={framework} key={framework.value}>
                {framework.label}
                <Select.ItemIndicator />
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Positioner>
      </Portal>
    </Select.Root>
  )
}

const frameworks = createListCollection({
  items: [
    { label: "Matriculado", value: "active" },
    { label: "Inativo", value: "inactive" },
    { label: "Formados", value: "formed" },
  ],
})



