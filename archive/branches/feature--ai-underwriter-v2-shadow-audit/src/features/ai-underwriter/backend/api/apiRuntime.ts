import { createInMemoryV2PersistenceRepository, type V2PersistenceRepository } from '../persistence';

let repository: V2PersistenceRepository = createInMemoryV2PersistenceRepository();

export function getV2ApiRepository() {
  return repository;
}

export function setV2ApiRepository(nextRepository: V2PersistenceRepository) {
  repository = nextRepository;
  return repository;
}

export function resetV2ApiRepository() {
  repository = createInMemoryV2PersistenceRepository();
  return repository;
}
