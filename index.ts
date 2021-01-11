import { ClassDecorator, MethodDecorator, PropertyDecorator, formatMetadataKey } from './lib/decorator';

@ClassDecorator('class')
class Demo {

  @PropertyDecorator('property')
  name = {}

  @MethodDecorator('method')
  run() {
    console.log(Reflect.getMetadata(formatMetadataKey, this, 'run'));
    console.log('c.method(): called');
  }
}

const d = new Demo();

d.run();