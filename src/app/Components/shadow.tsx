import { Shadow } from "@mantine/core";
function MyComponent() {

    return (
      <div>
        <h2>Box with Shadow</h2>
        <Shadow shadow="xs" radius="md">
          <div
            style={{
              width: '200px',
              height: '100px',
              background: 'white',
              padding: '20px',
            }}
          >
            Content with shadow
          </div>
        </Shadow>
      </div>
    );
  }
  
  export default MyComponent;
  